from pathlib import Path
BASE_DIR = Path(__file__).resolve().parent.parent
SECRET_KEY='dev-key'
DEBUG=True
ALLOWED_HOSTS=['*']
INSTALLED_APPS=[
 'django.contrib.contenttypes',
 'django.contrib.auth',
 'django.contrib.sessions',
 'django.contrib.messages',
 'django.contrib.staticfiles',
 'rest_framework',
 'applications',
]
MIDDLEWARE=[
 'django.middleware.security.SecurityMiddleware',
 'django.contrib.sessions.middleware.SessionMiddleware',
 'django.middleware.common.CommonMiddleware',
]
ROOT_URLCONF='project.urls'
TEMPLATES=[]
WSGI_APPLICATION=None
DATABASES={'default':{'ENGINE':'django.db.backends.sqlite3','NAME':BASE_DIR/'db.sqlite3'}}
LANGUAGE_CODE='en-us'
TIME_ZONE='UTC'
USE_I18N=True
USE_TZ=True
STATIC_URL='static/'
