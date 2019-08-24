# Generated by Django 2.2.4 on 2019-08-24 14:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('suffi', '0003_auto_20190824_1348'),
    ]

    operations = [
        migrations.CreateModel(
            name='Option',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.SlugField(max_length=255, unique=True)),
                ('co2', models.DecimalField(decimal_places=3, max_digits=10)),
            ],
        ),
    ]
