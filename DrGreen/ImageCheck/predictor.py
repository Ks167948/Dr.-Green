import numpy as np
import tensorflow as tf
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import keras
import os
import matplotlib.pyplot as plt


def run_model_on_image(image):
    # print("gxchvbjkm")
    model_path = r"C:/Users/laksh/OneDrive/Desktop/Coding/WE Project/DrGreen/ImageCheck/ML/plant_disease_predictor.h5"

    model = keras.models.load_model(model_path, safe_mode=False)

    print(model.summary())

    import cv2

    image_path = image
    img=cv2.imread(image_path)
    img=cv2.cvtColor(img,cv2.COLOR_BGR2RGB)
    plt.imshow(img)
    plt.show()

    image=tf.keras.preprocessing.image.load_img(image_path,target_size=(128,128))
    input_arr=tf.keras.preprocessing.image.img_to_array(image)
    input_arr=np.array([input_arr])
    print(input_arr.shape)
    prediction=model.predict(input_arr)
    result_index=np.argmax(prediction)
    class_name=['Apple___Apple_scab',
    'Apple___Black_rot',
    'Apple___Cedar_apple_rust',
    'Apple___healthy',
    'Blueberry___healthy',
    'Cherry_(including_sour)___Powdery_mildew',
    'Cherry_(including_sour)___healthy',
    'Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot',
    'Corn_(maize)___Common_rust_',
    'Corn_(maize)___Northern_Leaf_Blight',
    'Corn_(maize)___healthy',
    'Grape___Black_rot',
    'Grape___Esca_(Black_Measles)',
    'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)',
    'Grape___healthy',
    'Orange___Haunglongbing_(Citrus_greening)',
    'Peach___Bacterial_spot',
    'Peach___healthy',
    'Pepper,_bell___Bacterial_spot',
    'Pepper,_bell___healthy',
    'Potato___Early_blight',
    'Potato___Late_blight',
    'Potato___healthy',
    'Raspberry___healthy',
    'Soybean___healthy',
    'Squash___Powdery_mildew',
    'Strawberry___Leaf_scorch',
    'Strawberry___healthy',
    'Tomato___Bacterial_spot',
    'Tomato___Early_blight',
    'Tomato___Late_blight',
    'Tomato___Leaf_Mold',
    'Tomato___Septoria_leaf_spot',
    'Tomato___Spider_mites Two-spotted_spider_mite',
    'Tomato___Target_Spot',
    'Tomato___Tomato_Yellow_Leaf_Curl_Virus',
    'Tomato___Tomato_mosaic_virus',
    'Tomato___healthy']
    print(class_name[result_index])
    return class_name[result_index]


# run_model_on_image("C:/Users/laksh/OneDrive/Desktop/Coding/WE Project/DrGreen/ImageCheck/ML/Dataset/test/AppleCedarRust2.JPG")
run_model_on_image("C:/Users/laksh/OneDrive/Desktop/Coding/WE Project/DrGreen/ImageCheck/Tomato Late Blight.png")
