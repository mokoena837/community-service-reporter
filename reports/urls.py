from django.urls import path
from . import views

urlpatterns = [
    path('', views.create_report, name='create_report'),
    path('report/<int:report_id>/', views.report_detail, name='report_detail'),
]