from django.urls import path, include, re_path
from main.views import BootstrapFilterView, ReactFilterView, ReactInfiniteView

# URLConf
urlpatterns = [
    path('new/', views.getRoutes, name="routes"),
    path('api-therapists/', ReactFilterView.as_view(), name='react'),
    path('infinite-api-therapists/', ReactInfiniteView.as_view(), name='infinite-react'),

]

