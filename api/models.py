from django.db import models

# Create your models here.
JOB_CHOICES = (('1', 'Open'), ('2', 'In Progress'), ('3', 'Complete'))
RATING_CHOICES = (('1', 1), ('2', 2), ('3', 3), ('4', 4), ('5', 5))


class User(models.Model):
    user_id = models.IntegerField(primary_key=True, null=False)
    fname = models.CharField(max_length=16, default='', unique=False)
    lname = models.CharField(max_length=32, default='', unique=False)
    address = models.CharField(max_length=64, default='', unique=False)
    user_type = models.CharField(max_length=1, default='C', unique=False)
    DOB = models.DateField()
    email = models.CharField(max_length=15, unique=True, null=False)
    phone_number = models.CharField(max_length=10, null=False)
    created_at = models.DateTimeField(auto_now_add=True)
    username = models.CharField(max_length=16, null=False, unique=True)
    password = models.CharField(max_length=32, null=False, unique=False)


class Customer(models.Model):
    customer_id = models.IntegerField(null=False, primary_key=True)
    u_ID = models.ForeignKey(User, on_delete=models.CASCADE)
    credit_info = models.CharField(max_length=16, null=False, unique=False)
    CSV = models.CharField(max_length=6, null=False, unique=False)


class Mechanic(models.Model):
    mechanic_id = models.IntegerField(null=False, primary_key=True)
    u_ID = models.ForeignKey(User, on_delete=models.CASCADE)
    rating = models.IntegerField(null=False)
    checking_account = models.CharField(max_length=32, null=False)
    ASE_certified = models.BooleanField(default=True, null=False)
    available = models.BooleanField(default=False, null=False)


class Vehicle(models.Model):
    vehicle_id = models.IntegerField(primary_key=True, null=False)
    c_id = models.ForeignKey(Customer, on_delete=models.CASCADE)
    make = models.CharField(max_length=32, null=False, default='')
    model = models.CharField(max_length=32, null=False, default='')
    year = models.IntegerField(default=2022, null=False)
    last_oil_change = models.DateField()
    last_state_inspection = models.DateField()
    registration_number = models.IntegerField(null=False, default=1)


class Services(models.Model):
    service_id = models.IntegerField(primary_key=True, null=False)
    name = models.CharField(max_length=32, null=False, unique=True)
    cost = models.FloatField(null=False, default=24.99)


class Mechanic_Service_Relation(models.Model):
    m_id = models.ForeignKey(Mechanic, on_delete=models.CASCADE)
    s_id = models.ForeignKey(Services, on_delete=models.CASCADE)


class Current_Jobs(models.Model):
    job_id = models.IntegerField(primary_key=True, null=False)
    c_id = models.ForeignKey(Customer, on_delete=models.CASCADE)
    s_id = models.ForeignKey(Services, on_delete=models.CASCADE)
    state = models.CharField(max_length=16, choices=JOB_CHOICES)


class Reviews(models.Model):
    review_id = models.IntegerField(primary_key=True, null=False)
    c_id = models.ForeignKey(Customer, on_delete=models.CASCADE)
    m_id = models.ForeignKey(Mechanic, on_delete=models.CASCADE)
    description = models.CharField(max_length=140)
    rating = models.IntegerField(choices=RATING_CHOICES)

