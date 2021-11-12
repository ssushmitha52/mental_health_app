from django.db import models


class Person(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name

class Specialization(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Therapists(models.Model):
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    #t_id= models.IntegerField(primary_key=True)
    age = models.IntegerField(default=25)
    gender =  models.CharField(max_length=20)
    specializations = models.ManyToManyField(Specialization)
    email = models.CharField(max_length=100)
    start_date=models.DateTimeField(auto_now_add=True)
    phone=models.IntegerField(default=25)
    website=models.CharField(max_length=100)
    qual=models.CharField(max_length=100)
    desc=models.CharField(max_length=2005)

    def __str__(self):
        #return self.pk
        #print('\n')
        return self.person
