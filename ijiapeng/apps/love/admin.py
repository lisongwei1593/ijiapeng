from django.contrib import admin

from ijiapeng.apps.love.models import Comment
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth import get_user_model

class CommentAdmin(admin.ModelAdmin):
    readonly_fields = ('created_datetime',)
    list_display = ('user', 'text',
                    'reply', 'created_datetime',)

class CustomUserAdmin(UserAdmin):
    fieldsets = UserAdmin.fieldsets + (
            (None, {'fields': ('avatar',)}),
    )
    

# Register your models here.
admin.site.register(get_user_model(), CustomUserAdmin)
    
admin.site.register(Comment, CommentAdmin)