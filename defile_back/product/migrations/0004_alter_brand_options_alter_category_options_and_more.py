# Generated by Django 4.0.4 on 2022-04-17 11:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0003_productimage'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='brand',
            options={'verbose_name': 'Бренд', 'verbose_name_plural': 'Бренды'},
        ),
        migrations.AlterModelOptions(
            name='category',
            options={'verbose_name': 'Категория', 'verbose_name_plural': 'Категорий'},
        ),
        migrations.AlterModelOptions(
            name='productimage',
            options={'verbose_name': 'Фотография продукта', 'verbose_name_plural': 'Фотографий продукта'},
        ),
        migrations.AlterModelOptions(
            name='type',
            options={'verbose_name': 'Тип', 'verbose_name_plural': 'Типы'},
        ),
        migrations.RenameField(
            model_name='productimage',
            old_name='image',
            new_name='photo',
        ),
    ]
