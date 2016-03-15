# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('text', models.CharField(max_length=1000, verbose_name='\u7559\u8a00')),
                ('reply', models.CharField(max_length=1000, verbose_name='\u56de\u590d')),
                ('created_datetime', models.DateTimeField(auto_now_add=True, verbose_name='\u521b\u5efa\u65f6\u95f4')),
                ('user', models.ForeignKey(related_name='user_pickup_addr_user', verbose_name='\u7528\u6237', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': '\u7559\u8a00',
                'verbose_name_plural': '\u7559\u8a00',
            },
        ),
    ]
