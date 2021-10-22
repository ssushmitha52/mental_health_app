from django.contrib import admin
from django.urls import path, include
from . import views as auth
from rest_framework import routers


router = routers.DefaultRouter()
router.register(r'users', auth.UserView, 'user')


urlpatterns = [
    path('', auth.register, name="register"),
    path('login/', auth.login_user, name="login_user"),
    path('home/', auth.home, name="home"),
    path('api/', include(router.urls))
]
