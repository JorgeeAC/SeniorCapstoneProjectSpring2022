from api.jwt import get_tokens_for_user
from ..models import *
from ..serializers import *
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from .generic_views import get_current_user



class LoginView(APIView):
    permission_classes = []

    # fetch logged in User
    def get(self, request):
        user = get_current_user(request)

        if user is not None:
            return Response(UserSerializer(user).data, status=status.HTTP_200_OK)
        return Response(status=status.HTTP_404_NOT_FOUND)

    # login
    def post(self, request):
        email = request.data.get("email")
        password = request.data.get("password")
        try:
            user = User.objects.get(email=email, password=password)
        except:
            return Response(status=status.HTTP_404_NOT_FOUND)

        data = get_tokens_for_user(user)
        return Response(data, status=status.HTTP_200_OK)


class CurrentJobView(APIView):
    permission_classes = []

    # fetch current job for logged in User
    def get(self, request):
        user = get_current_user(request)
        if user is not None:
            job = Jobs.objects.filter(request_id__user_id=user.id)
            if job.count() > 0:
                return Response(JobsSerializer(job[0]).data, status=status.HTTP_200_OK)
            else:
                job = JobRequests.objects.order_by('created_at').filter(user_id=user.id)
                if job.count() > 0:
                    return Response(JobRequestSerializer(job[0]).data, status=status.HTTP_200_OK)
 
        return Response(status=status.HTTP_404_NOT_FOUND)


class MechanicJobView(APIView):
    permission_classes=[]

    # complete job for logged in Mechanic
    def put(self, request, current_job_id):
        try:
            user = get_current_user(request)
            mechanic = Mechanic.objects.get(u_ID=user.id)
            current_job = Jobs.objects.get(id=current_job_id, mechanic_id=mechanic.mechanic_id)
            job_request = JobRequests.objects.get(id=current_job.request_id.id)
            
        except:
            return Response(status=status.HTTP_404_NOT_FOUND)

        current_job.state = 'Complete'
        job_request.state = 'Complete'
        job_request.save()
        current_job.save()

        return Response(JobsSerializer(current_job).data, status=status.HTTP_200_OK)

    # get current job for logged in mechanic
    def get(self, request, current_job_id):
        try:
            user = get_current_user(request)
            mechanic = Mechanic.objects.get(u_ID=user.id)
            current_job = Jobs.objects.get(id=current_job_id, mechanic_id=mechanic.mechanic_id)
        except:
            return Response(status=status.HTTP_404_NOT_FOUND)

        return Response(JobsSerializer(current_job).data, status=status.HTTP_200_OK)

class JobRequestsView(APIView):
    permission_classes=[]

    # get all in progress job requests
    def get(self, request):
        jobs = JobRequests.objects.order_by('created_at').filter(state='In Progress')
        return Response(JobRequestSerializer(jobs, many=True).data, status=status.HTTP_200_OK)