
from django.db import models
from django.contrib.auth.models import User

class Report(models.Model):
    # Category choices
    CATEGORY_CHOICES = [
        ('pothole', 'Pothole'),
        ('water_leak', 'Water Leak'),
        ('electricity', 'Electricity Fault'),
        ('waste', 'Waste Collection'),
        ('street_light', 'Street Light Outage'),
    ]
    
    STATUS_CHOICES = [
        ('reported', 'Reported'),
        ('in_progress', 'In Progress'),
        ('resolved', 'Resolved'),
    ]
    
    # Fields
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    location = models.CharField(max_length=200)
    description = models.TextField()
    photo = models.ImageField(upload_to='reports/', blank=True, null=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='reported')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return f"Report #{self.id} - {self.get_category_display()}"