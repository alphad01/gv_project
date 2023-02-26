"""
Django settings for gv_project project.

Generated by 'django-admin startproject' using Django 4.1.7.

For more information on this file, see
https://docs.djangoproject.com/en/4.1/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/4.1/ref/settings/
"""

from pathlib import Path
import os

from decouple import config

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = config("SECRET_KEY")

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ["*"]


# Application definition

INSTALLED_APPS = [
    'jazzmin',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'whitenoise.runserver_nostatic',
    'django.contrib.staticfiles',
    
    # Third Party Apps
    # 'multiselectfield',
    'crispy_forms',
    "crispy_bootstrap5",
    #Local Apps
    "pages.apps.PagesConfig",
    "accounts.apps.AccountsConfig",
    "doctors.apps.DoctorsConfig",
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'gv_project.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
            os.path.join(BASE_DIR, 'templates')
            ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'accounts.context_processors.get_doctor',
                'accounts.context_processors.get_user_profile',
                'accounts.context_processors.get_google_api',
            ],
        },
    },
]

WSGI_APPLICATION = 'gv_project.wsgi.application'


# Database
# https://docs.djangoproject.com/en/4.1/ref/settings/#databases

DATABASES = {

  'default': {
  'ENGINE': "django.db.backends.postgresql",
  'NAME': config("NAME"),
  'USER': config("USER"),
  'PASSWORD': config("PASSWORD"),
  'HOST': config("HOST"),
  'PORT': '7491'
  }
 
 }

AUTH_USER_MODEL = 'accounts.User'

# Password validation
# https://docs.djangoproject.com/en/4.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.1/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'Africa/Lagos'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.1/howto/static-files/

STATIC_URL = 'static/'


STATICFILES_DIRS = [os.path.join(BASE_DIR, 'static')]

STATIC_ROOT =  os.path.join(BASE_DIR, 'staticfiles')

#STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage"


MEDIA_URL = '/media/' # new
MEDIA_ROOT = os.path.join(BASE_DIR, 'media') # new

STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage"

# Default primary key field type
# https://docs.djangoproject.com/en/4.1/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# Flash messages
from django.contrib.messages import constants as messages
MESSAGE_TAGS = {
    messages.ERROR: 'danger',
}

CRISPY_TEMPLATE_PACK = "bootstrap5"
# CRISPY_TEMPLATE_PACK = 'uni_form'

#Email settings
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'

EMAIL_HOST = "smtp.gmail.com"
EMAIL_PORT = "587"
EMAIL_USE_TLS = True
EMAIL_HOST_USER = config("EHU")
EMAIL_HOST_PASSWORD = config("EHP")
DEFAULT_FROM_EMAIL = config("DFE")
#DEFAULT_FROM_EMAIL = 'foodOnline Marketplace <django.foodonline@gmail.com>'

GOOGLE_API_KEY="AIzaSyCOugkkY9aMPcSlNONQfWQ7mLa1KVH58E4"

JAZZMIN_SETTINGS = {

        "site_title": "GetVet Platform",
        "site_header": "GetVet",
        "site_brand": "GetVet Admin",
        #"site_logo": "assets/img/brand/dark.svg",
        #"login_logo": "assets/img/brand/dark.svg",
        #"site_icon": "assets/img/brand/dark.svg",
         # Welcome text on the login screen
        "welcome_sign": "Welcome to GetVet ",
        # Copyright on the footer
        "copyright": "GetVet Ltd",

        # The model admin to search from the search bar, search bar omitted if excluded
        "search_model": "auth.User",


}
