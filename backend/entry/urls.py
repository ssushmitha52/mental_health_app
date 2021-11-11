from django.urls import path
from . import views

# URLConf
urlpatterns = [
    path('new/', views.getRoutes, name="routes"),
    path('entries/', views.getEntries, name="entries"),

    path('entries/<str:pk>/update/', views.updateEntry, name="update-note"),
    path('entries/create/', views.createEntry, name="create-entry"),

    path('entries/<str:pk>/', views.getEntry, name="entry")

]