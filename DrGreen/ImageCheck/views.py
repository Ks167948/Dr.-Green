from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from .serializer import UploadedImageSerializer
from rest_framework.response import Response
from rest_framework import status
from .models import Medicines
from .serializer import MedicineSerializer
import requests
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser
from django.conf import settings
import os
from .models import UploadedImage
# from .serializer import ImageUploadSerializer
from .predictor import run_model_on_image

# from .predictor.StockPricesPredictor import predict_stock_price, model_predictor

@api_view(['GET'])
def get_medicine(request):
    medicine=Medicines.objects.all()
    serializedData=MedicineSerializer(medicine, many=True).data
    return Response(serializedData)


@api_view(['POST'])
def create_medicine(request):
    data = request.data
    if not data['name']:
        return Response({'error': 'No match found'}, status=status.HTTP_400_BAD_REQUEST)
    serializer = MedicineSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def ImageUploadView(request):
    serializer = UploadedImageSerializer(data=request.data)
    if serializer.is_valid():
        instance = serializer.save()
        image_path = os.path.join(settings.MEDIA_ROOT, str(instance.image))
        image_url = request.build_absolute_uri(instance.image.url)  # ✅ builds full URL

        try:
            prediction = run_model_on_image(image_path)
            print (prediction)
            return Response({
                'prediction': prediction,
                'image_url': image_url
            }, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
