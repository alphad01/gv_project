# Generated by Django 4.1.7 on 2023-03-23 12:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('clients', '0003_animal_last_vaccination_date_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='vaccine',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('description', models.TextField(blank=True, null=True)),
                ('dosage', models.CharField(blank=True, max_length=20, null=True)),
                ('expiration_period', models.IntegerField()),
                ('animal_type', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='clients.animaltype')),
            ],
        ),
        migrations.CreateModel(
            name='Vaccination',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_completed', models.BooleanField(default=False)),
                ('date_administered', models.DateField(blank=True, null=True)),
                ('animal', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='clients.animal')),
                ('vaccine_name', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='vaccinations.vaccine')),
            ],
        ),
    ]
