from rest_framework.serializers import ModelSerializer
from .models import Entry


class EntrySerializer(ModelSerializer):
	class Meta:
		model = Entry
		fields = ['date', 'mood', 'moodTypes', 'sleep', 'eating', 'exercise', 'id']