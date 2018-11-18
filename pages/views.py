from django.shortcuts import render
from django.http import HttpResponse

def domov(req):
    return render(req, 'pages/domov.html')

def onas(req):
    return render(req, 'pages/onas.html')

def malice(req):
    return render(req, 'pages/malice.html')

def kontakt(req):
    return render(req, 'pages/kontakt.html')

