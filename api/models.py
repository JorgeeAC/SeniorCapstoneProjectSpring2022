from django.db import models

# Create your models here.

# Basic Model for a user. Expecting add-ons and deletions.
class User(models.Model):
    username = models.CharField(max_length=8, unique=True, null=False)
    password = models.CharField(max_length=15, null=False)
    email = models.CharField(max_length=15, unique=True, null=False)
    first_name = models.CharField(max_length=15, null=False)
    last_name = models.CharField(max_length=15, null=False)
    phone_number = models.CharField(max_length=10, null=False)
    created_at = models.DateTimeField(auto_now_add=True)
