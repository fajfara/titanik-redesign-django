from django.db import models
from multiselectfield import MultiSelectField

TIP_MALICE = (
    ('A', 'A'),
    ('B', 'B')
)

DAN_MALICE = (
    ('ponedeljek', 'ponedeljek'),
    ('torek', 'torek'),
    ('sreda', 'sreda'),
    ('cetrtek', 'četrtek'),
    ('petek', 'petek')
)

class Malica(models.Model):
    naziv = models.CharField(max_length=256)
    dan = models.CharField(
        max_length=20,
        choices=DAN_MALICE,
        default='ponedeljek'
    )
    tipmalice = models.CharField(
        max_length=1,
        choices=TIP_MALICE,
        default='A'
    )
    cena = models.IntegerField(default=5)
    opis = models.TextField()
    alergeni = models.CharField(max_length=256, default="vpis alergenov")

    def __str__(self):
        return self.naziv