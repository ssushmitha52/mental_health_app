from rest_framework.serializers import ModelSerializer
from .models import Entry
from rest_framework import serializers


class EntrySerializer(ModelSerializer):
	moodTypes = serializers.ListField()
	class Meta:
		model = Entry
		fields = ['date', 'mood', 'moodTypes', 'sleep', 'eating', 'exercise', 'id']