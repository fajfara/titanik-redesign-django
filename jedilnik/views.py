from django.shortcuts import render

from .models import Jed

# Create your views here.
def jedilnik(req):
    jedi = Jed.objects.all

    context = {
        'jedi': jedi
    }
    return render(req, 'pages/jedilnik.html', context)