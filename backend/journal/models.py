from django.db import models
from authentication.models import UserAccount


class Note(models.Model):
    body = models.TextField(null=True, blank=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(UserAccount, related_name='notes', on_delete=models.CASCADE)

    def __str__(self):
        return self.body[0:50]

    class Meta:
        ordering = ['created']