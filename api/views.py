from api.jwt import get_tokens_for_user
from .models import *
from .serializers import *
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.authentication import JWTAuthentication

# Create your views here.


def login(request):
    username = request.data.get("username")
    password = request.data.get("password")
    user = JWTAuthentication.authenticate(username=username, password=password)

    if user is not None:
        user_id = User.objects.get(username=username)
        data = get_tokens_for_user(user_id)
        return Response(data, status=status.HTTP_200_OK)
    return Response(status=status.HTTP_404_NOT_FOUND)

class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer     

    def create(self, request):
        serializer = CreateUserSerializer(data = request.data)
        if serializer.is_valid():
            # Hash user's password
            user = serializer.save()
            jwt_token = get_tokens_for_user(User.objects.get(username=user.username))

            return Response(jwt_token, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = 'user_id'


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

