# -*- coding: utf-8 -*-s
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings



class CustomUser(AbstractUser):
    avatar = models.ImageField(upload_to=settings.AVATAR_ROOT, blank=True, null=True,
                               verbose_name=u'头像')

class Comment(models.Model):
    user = models.ForeignKey(CustomUser, related_name='user_pickup_addr_user', db_index=True,
                             verbose_name=u'用户')
    text = models.CharField(max_length=1000, verbose_name=u'留言')
    reply = models.CharField(max_length=1000, verbose_name=u'回复', null=True, blank=True)
    created_datetime = models.DateTimeField(auto_now_add=True, verbose_name=u'创建时间')

    class Meta:
        verbose_name = verbose_name_plural = u'留言'

    def __unicode__(self):
            return self.user.username
        
