from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from .models import Report

def create_report(request):
    """View for reporting a new service issue"""
    if request.method == 'POST':
        category = request.POST.get('category')
        location = request.POST.get('location')
        description = request.POST.get('description')
        photo = request.FILES.get('photo')
        
        # Create report (temporarily without user until we add login)
        report = Report.objects.create(
            category=category,
            location=location,
            description=description,
            photo=photo,
            status='reported'
        )
        
        messages.success(request, f'Report #{report.id} submitted successfully!')
        return redirect('/tracking/')
    
    return render(request, 'reports/report_form.html')

def report_detail(request, report_id):
    """View for showing details of a specific report"""
    report = get_object_or_404(Report, id=report_id)
    return render(request, 'reports/report_detail.html', {'report': report})
