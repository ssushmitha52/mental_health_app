from django.db import models
from authentication.models import UserAccount
from jsonfield import JSONField
from django.db.models.signals import post_save
from django.dispatch import receiver


class Therapist(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    gender = models.CharField(max_length=100)
    specialization = models.CharField(max_length=100)
    email = models.CharField(max_length=100)


@receiver(post_save, sender=UserAccount)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        profile, created = Patient.objects.get_or_create(user=instance)


class Patient(models.Model):
    user = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    connectionRequests = models.ManyToManyField(Therapist)
