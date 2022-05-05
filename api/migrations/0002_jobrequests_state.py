# Generated by Django 4.0.3 on 2022-05-05 06:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='jobrequests',
            name='state',
            field=models.CharField(choices=[('1', 'In Progress'), ('2', 'Complete')], default='In Progress', max_length=16),
        ),
    ]
