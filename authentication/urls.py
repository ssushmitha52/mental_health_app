from django.contrib import admin
from django.urls import path
from . import views as auth


urlpatterns = [
    path('', auth.register, name="register"),
    path('login_user/', auth.login_user, name="login_user")
]
