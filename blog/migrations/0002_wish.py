# Generated by Django 2.2.3 on 2019-10-09 17:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Wish',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quote', models.TextField()),
                ('quotee', models.CharField(max_length=100)),
                ('published', models.DateField(auto_now_add=True)),
            ],
        ),
    ]
