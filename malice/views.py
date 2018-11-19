from django.shortcuts import render

from .models import Malica

# Create your views here.
def malice(req):
    malice = Malica.objects.all

    context = {
        'malica': malice
    }
    return render(req, 'pages/malice.html', context)