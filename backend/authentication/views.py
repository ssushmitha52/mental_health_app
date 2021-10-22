from django.shortcuts import render, redirect
from .forms import NewUserForm
from django.contrib.auth import login, authenticate
from django.contrib import messages
from django.contrib.auth.forms import AuthenticationForm
from rest_framework import viewsets
from .serializers import UserSerializer
from django.contrib.auth.models import User

# Create your views here.

class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()


def register(request):
    if request.method == "POST":
        form = NewUserForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            messages.success(request, "Registration successful.")
            return redirect("home")
        messages.error(request, "Unsuccessful registration. Invalid information.")
        return render(request=request, template_name="authentication/register.html",
                      context={"register_form": form})

    form = NewUserForm()
    return render(request=request, template_name="authentication/register.html", context={"register_form": form})



def login_user(request):
    if request.method == "POST":
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                messages = f"You are now logged in as {username}."
                return redirect("home")
            else:
                messages= "Invalid username or password."
        else:
            messages = "Invalid username or password."
        return render(request=request, template_name="authentication/login.html",
                      context={"login_form": form, "messages": messages})
    form = AuthenticationForm()
    return render(request=request, template_name="authentication/login.html", context={"login_form": form})


def home(request):
    return render(request=request, template_name="authentication/home.html")
