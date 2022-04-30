from api.jwt import get_tokens_for_user
from .models import *
from .serializers import *
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from wrench_project.jwt_stuff.authentication import JWTAuthentication
from rest_framework.views import APIView

class LoginView(APIView):
    permission_classes=[]

    #fetch logged in user
    def get(self, request):

        header = JWTAuthentication.get_header(JWTAuthentication, request)
        raw_token = JWTAuthentication.get_raw_token(JWTAuthentication, header)
        validated_token = JWTAuthentication.get_validated_token(JWTAuthentication, raw_token)
        user = User.objects.get(id=validated_token["user_id"])

        if user is not None:
            return Response(UserSerializer(user).data, status=status.HTTP_200_OK)
        return Response(status=status.HTTP_404_NOT_FOUND)

    #login
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
    serializer_class = UserSerializer     
    permission_classes=[]

    def create(self, request):
        serializer = CreateUserSerializer(data = request.data)
        if serializer.is_valid():
            # Hash user's password
            user = serializer.save()
            jwt_token = get_tokens_for_user(user)

            return Response(jwt_token, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ServiceList(generics.ListAPIView):
    permission_classes=[]
    queryset = Services.objects.all()
    serializer_class = ServiceSerializer

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = 'id'
    permission_classes=[]

class VehicleView(generics.CreateAPIView):
    queryset = Vehicle.objects.all()
    serializer_class = VehicleSerializer


class CustomerView(generics.CreateAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer


class MechanicView(generics.CreateAPIView):
    queryset = Mechanic.objects.all()
    serializer_class = MechanicSerializer


class JobsView(generics.CreateAPIView):
    queryset = Current_Jobs
    serializer_class = JobsSerializer


class ReviewView(generics.CreateAPIView):
    queryset = Reviews
    serializer_class = ReviewsSerializer

