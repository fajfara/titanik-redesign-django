from django.db import models
from multiselectfield import MultiSelectField

izdelkiIzbira = (
    (1, 'pica'),
    (2, 'kruhek'),
    (3, 'kosilo'),
    (4, 'pijaca')
)
velikostIzbira = (
    (1, 'Otroška'),
    (2, 'Mala'),
    (3, 'Velika'),
    (4, 'Uni')
)

class Jed(models.Model):
    naziv = models.CharField(max_length=256)
    tipIzdelka = MultiSelectField(choices=izdelkiIzbira)
    velikost = MultiSelectField(choices=velikostIzbira)
    sestavine = models.CharField(max_length=512)
    alergeni = models.CharField(max_length=512)
    slika = models.ImageField(upload_to='photos/%Y/%m/%d/')
    cenaOtroska = models.DecimalField(max_digits=3, decimal_places=2)
    cenaMala = models.DecimalField(max_digits=3, decimal_places=2)
    cenaVelika = models.DecimalField(max_digits=3, decimal_places=2)
    cenaUni = models.DecimalField(max_digits=3, decimal_places=2)
    datum_kreiranja = models.DateField(auto_now_add=True)
    prikazi = models.BooleanField(default=True)

    def __str__(self):
        return self.naziv