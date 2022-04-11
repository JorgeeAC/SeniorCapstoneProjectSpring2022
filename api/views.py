from django.shortcuts import render
from rest_framework import generics
from .models import User, Vehicle, Mechanic,  Current_Jobs, Reviews, Customer
from .serializers import UserSerializer, VehicleSerializer, \
    MechanicSerializer, JobsSerializer, ReviewsSerializer, CustomerSerializer

# Create your views here.


class UserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


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



