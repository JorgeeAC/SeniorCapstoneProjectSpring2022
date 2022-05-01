from rest_framework import serializers
from .models import *

class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'fname', 'lname', 'address', 'user_type', 'DOB',
                  'email', 'phone_number', 'created_at', 'username', 'password')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'fname', 'lname', 'address', 'user_type', 'DOB',
                  'email', 'phone_number', 'created_at', 'username')

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Services
        fields = ('service_id', 'name', 'cost', 'description')


class MechanicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mechanic
        fields = ('mechanic_id', 'u_ID', 'ASE_certified', 'available')


class VehicleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vehicle

    fields = ('vehicle_id', 'c_id', 'make', 'model', 'year',
              'last_oil_change', 'last_state_inspection', 'registration_number')

class UserCompleteSerializer(serializers.ModelSerializer):
    cars = VehicleSerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'fname', 'lname', 'address', 'user_type', 'DOB',
                  'email', 'phone_number', 'created_at', 'username', 'cars']

class JobRequestSerializer(serializers.ModelSerializer):
    service = ServiceSerializer(read_only=True, source='service_id')
    user = UserCompleteSerializer(read_only=True, source='user_id')
    
    class Meta:
        model=JobRequests
        fields=('id', 'user', 'service')

class JobRequestCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model=JobRequests
        fields=('id', 'user_id', 'service_id')

class JobsSerializer(serializers.ModelSerializer):
    request = JobRequestSerializer(read_only=True, source='request_id')
    mechanic = MechanicSerializer(read_only=True, source='mechanic_id')
    class Meta:
        model = Jobs
        fields = ('id', 'request', 'state', 'mechanic')

class JobCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model=Jobs
        fields=('id', 'request_id', 'state', 'mechanic_id')


class ReviewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reviews
        fields = ('review_id', 'c_id', 'm_id', 'description', 'rating')


