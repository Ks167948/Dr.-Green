from rest_framework import serializers
from .models import Medicines,UploadedImage

class MedicineSerializer(serializers.ModelSerializer):
    class Meta:
        model=Medicines
        fields='__all__'
        
class UploadedImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = UploadedImage
        fields = ['id', 'image', 'uploaded_at']