from django.shortcuts import render
from django.conf import settings

def home(request):
    context = {
        'debug': settings.DEBUG
    }
    return render(request, 'base.html', context)