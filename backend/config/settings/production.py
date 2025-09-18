from .base import *

# Absolute path where collectstatic will store files
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

# URL to serve static files
STATIC_URL = '/static/'

DEBUG = False

# Allowed hosts (production domain)
ALLOWED_HOSTS = env.list("ALLOWED_HOSTS", default=["scanly-4i39.onrender.com"])

MIDDLEWARE = [
    'whitenoise.middleware.WhiteNoiseMiddleware', # added this
] + MIDDLEWARE

# Security settings
CSRF_COOKIE_SECURE = True
SESSION_COOKIE_SECURE = True
SECURE_SSL_REDIRECT = True
SECURE_HSTS_SECONDS = 3600
SECURE_HSTS_INCLUDE_SUBDOMAINS = True
SECURE_HSTS_PRELOAD = True

# Production database (from environment)
DATABASES = {
    "default": env.db("DATABASE_URL")
}

# CORS only your frontend domain
CORS_ALLOWED_ORIGINS = env.list("CORS_ALLOWED_ORIGINS", default=["https://yourfrontend.com"])
