# Generated by Django 2.1.3 on 2018-11-19 12:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('malice', '0003_malica_alergeni'),
    ]

    operations = [
        migrations.AlterField(
            model_name='malica',
            name='dan',
            field=models.CharField(choices=[('ponedeljek', 'ponedeljek'), ('torek', 'torek'), ('sreda', 'sreda'), ('cetrtek', 'četrtek'), ('petek', 'petek')], default='ponedeljek', max_length=20),
        ),
        migrations.AlterField(
            model_name='malica',
            name='tipmalice',
            field=models.CharField(choices=[('A', 'A'), ('B', 'B')], default='A', max_length=1),
        ),
    ]