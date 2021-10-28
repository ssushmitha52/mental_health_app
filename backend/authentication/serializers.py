from .models import UserAccount
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserAccount
        fields = ['id', 'username', 'gender', 'dob',  'email', 'is_active']
        read_only_field = ['is_active']