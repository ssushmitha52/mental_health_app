from django.contrib import admin

# Register your models here.

from .models import Person, Specialization, Therapists

admin.site.register(Person)
admin.site.register(Specialization)
admin.site.register(Therapists)