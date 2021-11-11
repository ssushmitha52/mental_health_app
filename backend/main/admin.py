from django.contrib import admin
from .models import *

admin.site.register(Patient)
admin.site.register(Therapist)
admin.site.register(Therapists)
admin.site.register(Person)