# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('love', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='reply',
            field=models.CharField(max_length=1000, null=True, verbose_name='\u56de\u590d', blank=True),
        ),
    ]
