from django.contrib import admin
from django.urls import path
from . import views as main


urlpatterns = [
    path('connect/', main.connect, name="connect")
]
