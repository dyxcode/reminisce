# Generated by Django 3.2.4 on 2021-08-20 08:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_recentmodel'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='recentmodel',
            options={'ordering': ['-id']},
        ),
    ]
