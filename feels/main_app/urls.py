from django.urls import path
from . import views

urlpatterns = [
    path('', views.base, name='base'),
    path('summary/', views.summary, name='summary'),
]
