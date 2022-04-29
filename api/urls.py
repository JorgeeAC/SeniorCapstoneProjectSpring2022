from django import views
from django.urls import path
from .views import *

urlpatterns = [
    path('home', JobsView.as_view()),
    path('mech', MechanicView.as_view()),
    path('cust', CustomerView.as_view()),
    path('cust/vehicle', VehicleView.as_view()),
    path('mech/reviews', ReviewView.as_view()),

    path('users/<int:user_id>/', UserDetail.as_view()),
    path('users', UserList.as_view())
]