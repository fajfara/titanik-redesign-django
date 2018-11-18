from django.shortcuts import render

# Create your views here.
def malice(req):
    return render(req, 'pages/malice.html')