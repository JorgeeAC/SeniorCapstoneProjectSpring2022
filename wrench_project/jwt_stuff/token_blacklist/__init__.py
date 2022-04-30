from django import VERSION

if VERSION < (3, 2):
    default_app_config = (
        "wrench_project.jwt_stuff.token_blacklist.apps.TokenBlacklistConfig"
    )
