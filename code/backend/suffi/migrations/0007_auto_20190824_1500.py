# Generated by Django 2.2.4 on 2019-08-24 15:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('suffi', '0006_activechallenge'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='label',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='challenge',
            name='label',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='option',
            name='title',
            field=models.CharField(max_length=255),
        ),
    ]
