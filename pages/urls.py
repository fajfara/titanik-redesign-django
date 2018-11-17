from django.urls import path

from . import views

urlpatterns = [
    path('', views.domov, name='domov'),
    path('onas', views.onas, name='onas'),
    path('jedilnik', views.jedilnik, name='jedilnik'),
    path('malice', views.malice, name='malice' ),
    path('kontakt', views.kontakt, name='kontakt'),
]