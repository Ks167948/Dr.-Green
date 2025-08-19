from django.urls import path
from .views import get_medicine,create_medicine
from django.conf import settings
from django.conf.urls.static import static
from .views import ImageUploadView



urlpatterns = [
    path('medicines/', get_medicine, name='get_medicine'),
    path('medicines/create/', create_medicine, name='create_medicine'),
    path('upload/', ImageUploadView, name='image-upload'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


