from http.client import BAD_REQUEST
from api.jwt import get_tokens_for_user
from .models import *
from .serializers import *
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from wrench_project.jwt_stuff.authentication import JWTAuthentication
from rest_framework.views import APIView

class LoginView(APIView):
    permission_classes = []

    # fetch logged in user
    def get(self, request):
        header = JWTAuthentication.get_header(JWTAuthentication, request)
        raw_token = JWTAuthentication.get_raw_token(JWTAuthentication, header)
        validated_token = JWTAuthentication.get_validated_token(JWTAuthentication, raw_token)
        user = User.objects.get(id=validated_token["user_id"])

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

class ReviewView(generics.CreateAPIView):
    permission_classes=[]
    queryset = Reviews
    serializer_class = ReviewsSerializer
