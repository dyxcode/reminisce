# Generated by Django 3.2.4 on 2021-08-13 07:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20210624_1217'),
    ]

    operations = [
        migrations.AddField(
            model_name='imagemodel',
            name='height',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='imagemodel',
            name='width',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
    ]
