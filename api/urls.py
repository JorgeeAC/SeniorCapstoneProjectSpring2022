from django import views
from django.urls import path
from api import views


urlpatterns = [
    path('users/<int:user_id>/', views.UserDetail.as_view()),
    path('users', views.UserList.as_view())
]