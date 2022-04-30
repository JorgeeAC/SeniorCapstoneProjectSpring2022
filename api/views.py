from .models import *
from .serializers import *
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status

# Create your views here.


class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer     

    def create(self, request):
        serializer = CreateUserSerializer(data = request.data)
        if serializer.is_valid():
            # Hash user's password
            user = serializer.save()
            # JWT_ADD: Send over JWT Token
            return Response(UserSerializer(user).data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = 'user_id'


class VehicleView(generics.CreateAPIView):
    queryset = Vehicle.objects.all()
    serializer_class = VehicleSerializer


class MechanicView(generics.CreateAPIView):
    queryset = Mechanic.objects.all()
    serializer_class = MechanicSerializer


class JobsView(generics.CreateAPIView):
    queryset = Current_Jobs
    serializer_class = JobsSerializer


class ReviewView(generics.CreateAPIView):
    queryset = Reviews
    serializer_class = ReviewsSerializer

