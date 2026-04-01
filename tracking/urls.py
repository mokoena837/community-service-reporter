from django.urls import path
from . import views

app_name = 'tracking'

urlpatterns = [
    path('', views.my_reports, name='my_reports'),
    path('status/<int:report_id>/', views.report_status, name='report_status'),
    path('profile/', views.profile, name='profile'),  # Make sure this line exists
]