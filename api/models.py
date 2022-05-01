from django.db import models

# Create your models here.
JOB_CHOICES = (('1', 'In Progress'), ('2', 'Complete'))
RATING_CHOICES = (('1', 1), ('2', 2), ('3', 3), ('4', 4), ('5', 5))


class User(models.Model):
    id = models.AutoField(primary_key=True)
    fname = models.CharField(max_length=16, default='', unique=False)
    lname = models.CharField(max_length=32, default='', unique=False)
    address = models.CharField(max_length=64, default='', unique=False)
    user_type = models.CharField(max_length=1, default='C', unique=False)
    DOB = models.DateField()
    email = models.CharField(max_length=30, unique=True, null=False)
    phone_number = models.CharField(max_length=10, null=False)
    created_at = models.DateTimeField(auto_now_add=True)
    username = models.CharField(max_length=16, null=False, unique=True)
    password = models.CharField(max_length=32, null=False, unique=False)

    def __str__(self):
        full_name = self.fname + ' ' + self.lname
        return full_name


class Mechanic(models.Model):
    mechanic_id = models.AutoField(primary_key=True)
    u_ID = models.ForeignKey(User, on_delete=models.CASCADE)
    checking_account = models.CharField(max_length=32, null=True)
    ASE_certified = models.BooleanField(default=True, null=False)
    available = models.BooleanField(default=False, null=False)

    def __str__(self):
        return (f'{self.mechanic_id}' 
                f'{self.u_ID.__str__()}')


class Vehicle(models.Model):
    vehicle_id = models.AutoField(primary_key=True)
    c_id = models.ForeignKey(User, on_delete=models.CASCADE)
    make = models.CharField(max_length=32, null=False, default='')
    model = models.CharField(max_length=32, null=False, default='')
    year = models.IntegerField(default=2022, null=False)
    last_oil_change = models.DateField()
    last_state_inspection = models.DateField()
    registration_number = models.IntegerField(null=False, default=1)

    def __str__(self):
        return self.vehicle_id, self.c_id.u_ID.__str__()


class Services(models.Model):
    service_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=32, null=False, unique=True)
    cost = models.FloatField(null=False, default=24.99)
    description = models.CharField(max_length=140)

    def __str__(self):
        return self.name

class JobRequests(models.Model):
    id = models.AutoField(primary_key=True)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    service_id = models.ForeignKey(Services, on_delete=models.CASCADE)

    def __str__(self):
        return (f'{self.id}' 
                f'{self.user_id.u_ID.__str__()}')

class Jobs(models.Model):
    id = models.AutoField(primary_key=True)
    request_id = models.ForeignKey(JobRequests, on_delete=models.CASCADE)
    mechanic_id = models.ForeignKey(Mechanic, on_delete=models.CASCADE)
    state = models.CharField(max_length=16, choices=JOB_CHOICES, default='In Progress')

    def __str__(self):
        return (f'{self.id}' 
                f'{self.request_id.u_ID.__str__()}')


class Reviews(models.Model):
    review_id = models.AutoField(primary_key=True)
    c_id = models.ForeignKey(User, on_delete=models.CASCADE)
    m_id = models.ForeignKey(Mechanic, on_delete=models.CASCADE)
    description = models.CharField(max_length=140)
    rating = models.IntegerField(choices=RATING_CHOICES)

    def __str__(self):
        return (f'{self.review_id}', f'{self.m_id.u_ID.__str__()}')