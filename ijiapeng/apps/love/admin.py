from django.contrib import admin

from ijiapeng.apps.love.models import Comment


class CommentAdmin(admin.ModelAdmin):
    readonly_fields = ('created_datetime',)
    list_display = ('user', 'text',
                    'reply', 'created_datetime',)
    
    
admin.site.register(Comment, CommentAdmin)