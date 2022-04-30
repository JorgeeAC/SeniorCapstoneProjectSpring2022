from django.contrib import admin
from .models import User, Mechanic, Vehicle, Services, Reviews, Mechanic_Service_Relation
# Register your models here.
admin.site.register(User)
admin.site.register(Mechanic)
admin.site.register(Vehicle)
admin.site.register(Services)
admin.site.register(Reviews)
admin.site.register(Mechanic_Service_Relation)
