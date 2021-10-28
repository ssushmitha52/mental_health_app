from django.contrib import admin
from django.urls import path, include
import authentication.views as auth
from rest_framework import routers

from .views import current_user, UserList

router = routers.DefaultRouter()
router.register(r'users', auth.UserView, 'user')


urlpatterns = [
    path('', auth.register, name="register"),
    path('login/', auth.login_user, name="login_user"),
    path('home/', auth.home, name="home"),
    path('current_user/', current_user),
    path('users/', UserList.as_view()),
    path('api/', include(router.urls))
]
