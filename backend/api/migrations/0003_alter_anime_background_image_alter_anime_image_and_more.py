# Generated by Django 5.0.1 on 2024-01-13 17:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_remove_anime_season_anime_background_image_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='anime',
            name='background_image',
            field=models.URLField(default=None),
        ),
        migrations.AlterField(
            model_name='anime',
            name='image',
            field=models.URLField(default=None),
        ),
        migrations.AlterField(
            model_name='anime',
            name='yt_trailer',
            field=models.URLField(default=None),
        ),
    ]