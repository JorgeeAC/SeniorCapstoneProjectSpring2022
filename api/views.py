from cgitb import lookup
from http.client import BAD_REQUEST
from api.jwt import get_tokens_for_user
from .models import *
from .serializers import *
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from wrench_project.jwt_stuff.authentication import JWTAuthentication
from rest_framework.views import APIView


def get_current_user(request):
    header = JWTAuthentication.get_header(JWTAuthentication, request)
    raw_token = JWTAuthentication.get_raw_token(JWTAuthentication, header)
    validated_token = JWTAuthentication.get_validated_token(JWTAuthentication, raw_token)

    return User.objects.get(id=validated_token["user_id"])


class LoginView(APIView):
    permission_classes = []

    # fetch logged in user
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
    # fetch current job for loggedin User
    def get(self, request):
        user = get_current_user(request)

        if user is not None:
            job = Jobs.objects.filter(request_id__user_id=user.id)
            if job.count() > 0:
                job = job[0]
                return Response(JobsSerializer(job).data, status=status.HTTP_200_OK)
            else:
                job = JobRequests.objects.order_by('created_at').filter(user_id=user.id)
                if job.count() > 0:
                    job = job[0]
                    return Response(JobRequestSerializer(job).data, status=status.HTTP_200_OK)
 
        return Response(status=status.HTTP_404_NOT_FOUND)


class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserCompleteSerializer
    permission_classes = []

    def create(self, request):
        serializer = CreateUserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()

            if(user.user_type == 'M'):
                Mechanic(u_ID=user).save()

            jwt_token = get_tokens_for_user(user)
            return Response(jwt_token, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ServiceList(generics.ListAPIView):
    permission_classes=[]
    queryset = Services.objects.all()
    serializer_class = ServiceSerializer

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserCompleteSerializer
    lookup_field = 'id'
    permission_classes = []

class JobRequestsList(generics.ListCreateAPIView):
    permission_classes=[]
    queryset = JobRequests.objects.all()
    serializer_class = JobRequestSerializer

    def create(self, request):
        serializer=JobRequestCreateSerializer(data=request.data)
        if serializer.is_valid():
            job_request=serializer.save()
            return Response(JobRequestSerializer(job_request).data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class JobList(generics.ListCreateAPIView):
    permission_classes=[]
    queryset=Jobs.objects.all()
    serializer_class = JobsSerializer

    def create(self, request):
        serializer=JobCreateSerializer(data=request.data)
        if serializer.is_valid():
            job=serializer.save()
            return Response(JobsSerializer(job).data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class VehicleView(generics.CreateAPIView):
    queryset = Vehicle.objects.all()
    serializer_class = VehicleSerializer

class MechanicView(generics.ListAPIView):
    permission_classes=[]
    queryset = Mechanic.objects.all()
    serializer_class = MechanicSerializer

class MechanicDetail(generics.RetrieveAPIView):
    permission_classes=[]

    def get(self, request, id):
        serializer=MechanicSerializer
        
        mechanic = Mechanic.objects.get(u_ID=id)
        if mechanic is not None:
            return (Response(MechanicSerializer(mechanic).data, status=status.HTTP_200_OK))
        return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)



class ReviewView(generics.CreateAPIView):
    permission_classes=[]
    queryset = Reviews
    serializer_class = ReviewsSerializer
