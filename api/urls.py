from django import views
from django.urls import path
from .views.class_views import *
from .views.generic_views import *

urlpatterns = [
    path('mechanics', MechanicView.as_view()),
    path('mechanics/<int:id>/', MechanicDetail.as_view()),

    path('cust/vehicle', VehicleView.as_view()),
    path('mech/reviews', ReviewView.as_view()),

    path('job-requests', JobRequestsList.as_view()),
    path('job-requests/in-progress', JobRequestsView.as_view()),

    path('jobs/customers/current-job', CurrentJobView.as_view()),

    path('jobs/mechanics/current-job', MechanicJobView.as_view()),
    path('jobs/mechanics/complete-job/<int:current_job_id>', MechanicJobView.as_view()),

    path('jobs', JobList.as_view()),
    

    path('services', ServiceList.as_view()),

    path('users/<int:id>/', UserDetail.as_view()),
    path('users/login', LoginView.as_view()),
    path('users/logged-in', LoginView.as_view()),
    path('users', UserList.as_view())
]