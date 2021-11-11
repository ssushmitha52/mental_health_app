from django.db import models
from authentication.models import UserAccount
from django_mysql.models import JSONField


class Entry(models.Model):
    date = models.DateTimeField(auto_now=True,blank=True, null=True,)
    mood = models.IntegerField()
    moodTypes = models.JSONField()
    sleep = models.IntegerField()
    eating = models.IntegerField()
    exercise = models.CharField(max_length=100)
    user = models.ForeignKey(UserAccount, related_name='entries', on_delete=models.CASCADE)

    def __str__(self):
        return self.moodTypes

    class Meta:
        ordering = ['date']