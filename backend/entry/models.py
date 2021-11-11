from django.db import models
from authentication.models import UserAccount
from django.db import models
import jsonfield


class Entry(models.Model):
    date = models.DateTimeField(blank=True, null=True,)
    mood = models.IntegerField()
    moodTypes = jsonfield.JSONField()
    sleep = models.IntegerField()
    eating = models.IntegerField()
    exercise = models.CharField(max_length=100)
    user = models.ForeignKey(UserAccount, related_name='entries', on_delete=models.CASCADE)

    def __str__(self):
        return self.moodTypes

    class Meta:
        ordering = ['date']