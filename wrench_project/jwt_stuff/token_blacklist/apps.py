from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class TokenBlacklistConfig(AppConfig):
    name = "wrench_project.jwt_stuff.token_blacklist"
    verbose_name = _("Token Blacklist")
    default_auto_field = "django.db.models.BigAutoField"
