from xml.dom.minidom import ReadOnlySequentialNamedNodeMap
from rest_framework import serializers
from .models import User, Customer, Current_Jobs, Reviews, Mechanic, Vehicle, Services


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
        fields = ('service_id', 'name', 'cost')


class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ('customer_id', 'u_id', 'credit_info', 'CSV')


class MechanicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mechanic
        fields = ('mechanic_id', 'u_ID', 'rating', 'ASE_certified', 'available')


class VehicleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vehicle
    fields = ('vehicle_id', 'c_id', 'make', 'model', 'year',
              'last_oil_change', 'last_state_inspection', 'registration_number')


class JobsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Current_Jobs
        fields = ('job_id', 'c_id', 's_id', 'state')


class ReviewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reviews
        fields = ('review_id', 'c_id', 'm_id', 'description', 'rating')