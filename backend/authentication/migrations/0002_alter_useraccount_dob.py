# Generated by Django 3.2.6 on 2021-10-24 12:09

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='useraccount',
            name='dob',
            field=models.DateField(default=datetime.date.today, verbose_name='Date'),
        ),
    ]
