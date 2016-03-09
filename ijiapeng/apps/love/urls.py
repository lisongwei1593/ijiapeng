# encoding: utf-8


from django.conf.urls import patterns, url

urlpatterns = patterns('ijiapeng.apps.love.views',
    url(r'^accounts/login/$', 'login'),  
    url(r'^$', 'index', name='index'),
)
