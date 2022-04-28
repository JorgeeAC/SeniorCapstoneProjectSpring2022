from django import views
from django.urls import path
# from .views import UserView, MechanicView, VehicleView, JobsView, ReviewView, CustomerView
from api import views


urlpatterns = [
    # path('home', JobsView.as_view()),
    # path('mech', MechanicView.as_view()),
    # path('cust', CustomerView.as_view()),
    # path('cust/vehicle', VehicleView.as_view()),
    # path('mech/reviews', ReviewView.as_view()),
    # path('user', UserView.as_view()),


    # path('users/<int:user_id>/', views.user_details),
    path('users', views.users)
]