from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import Therapists, Person, Specialization


class StringSerializer(serializers.StringRelatedField):
    def to_internal_value(self, value):
        return value


class TherapistSerializer(ModelSerializer):
    person = StringSerializer(many=False)
    specializations = StringSerializer(many=False)
    #name = serializers.CharField(source='person.name')

    class Meta:
        model = Therapists
        fields = '__all__'