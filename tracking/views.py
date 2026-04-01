from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from reports.models import Report

def my_reports(request):
    """View for showing all reports"""
    reports = Report.objects.all().order_by('-created_at')
    
    context = {
        'reports': reports,
    }
    return render(request, 'tracking/my_reports.html', context)

def report_status(request, report_id):
    """View for tracking status of a specific report"""
    report = get_object_or_404(Report, id=report_id)
    return render(request, 'tracking/report_status.html', {'report': report})

def profile(request):
    """View for user profile page"""
    reports = Report.objects.all()
    context = {
        'report_count': reports.count(),
    }
    return render(request, 'tracking/profile.html', context)