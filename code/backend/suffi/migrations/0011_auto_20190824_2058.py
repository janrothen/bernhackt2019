# Generated by Django 2.2.4 on 2019-08-24 18:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('suffi', '0010_auto_20190824_1908'),
    ]

    operations = [
        migrations.AddField(
            model_name='activechallenge',
            name='challangeComplete',
            field=models.BooleanField(default=False),
        ),
        migrations.CreateModel(
            name='Trophy',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('icon', models.CharField(max_length=255)),
                ('label', models.CharField(max_length=255)),
                ('challenge', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='trophy', to='suffi.Challenge')),
            ],
        ),
    ]
