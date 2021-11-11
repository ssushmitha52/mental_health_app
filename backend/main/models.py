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


from django.db import models


# Create your models here.
class Person(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class Specialization(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Therapists(models.Model):
    person = models.ForeignKey(Person,  related_name='person', on_delete=models.CASCADE)
    # t_id= models.IntegerField(primary_key=True)
    age = models.IntegerField(default=25)
    gender = models.CharField(max_length=20)
    specializations = models.ManyToManyField(Specialization)
    email = models.CharField(max_length=100)
    start_date = models.DateTimeField(auto_now_add=True)
    phone = models.IntegerField(default=25)
    website = models.CharField(max_length=100)
    qual = models.CharField(max_length=100)
    desc = models.CharField(max_length=2005)

    def __str__(self):
        # return self.pk
        # print('\n')
        return '\n%s %s %s %s %s %s %s %s %s %s' % (
        self.pk, self.person, self.age, self.gender, self.specializations, self.email, self.phone, self.website,
        self.qual, self.desc)
