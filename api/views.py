from audioop import add
from django.shortcuts import render
from rest_framework import status
from .models import User
from .serializers import UserSerializer

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view

# Create your views here.


#Get List of Users or Post
@api_view(['GET', 'POST'])
def users(request):
    if request.method == 'POST':
        query_set = User.objects.filter(email = request.data.get("email"))
        if not query_set.exists():
            first_name = request.data.get("firstName")
            last_name = request.data.get("lastName")
            password = request.data.get("password")
            address = request.data.get("address")
            date_of_birth = request.data.get("dateOfBirth")
            email = request.data.get("email")
            phone_number = request.data.get("phoneNumber")
            user_type = request.data.get("userType")
            username = request.data.get("username")

            user = User(fname=first_name, lname=last_name, password=password, address=address, 
                        DOB=date_of_birth, email=email, phone_number=phone_number, user_type=user_type, username=username)
            user.save()

            return Response(UserSerializer(user).data, status.HTTP_201_CREATED)
        else: 
            return Response({"message": "User already exists."}, status.HTTP_409_CONFLICT)
    elif request.method == 'GET':
        data = []
        for user in User.objects.all():
            data.append(UserSerializer(user).data)

        return Response(data, status.HTTP_200_OK)









