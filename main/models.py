from django.db import models
from django.contrib.auth.models import User
from jsonfield import JSONField


class Therapist(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    gender = models.CharField(max_length=100)
    specialization = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    phone = models.IntegrerField()


class Patient(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    connectionRequests = JSONField()
