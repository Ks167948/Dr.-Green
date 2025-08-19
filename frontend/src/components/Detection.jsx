import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export default function Detection() {

  const diseaseCures = {
    'Apple___Apple_scab': 'Use fungicides like captan or myclobutanil. Prune trees to improve air circulation.',
    'Apple___Black_rot': 'Remove and destroy infected fruit and twigs. Apply appropriate fungicides during growing season.',
    'Apple___Cedar_apple_rust': 'Apply fungicides early in the season. Remove nearby juniper trees if possible.',
    'Apple___healthy': 'No treatment needed. Continue regular maintenance and monitoring.',
    'Blueberry___healthy': 'No treatment needed. Maintain good cultural practices.',
    'Cherry_(including_sour)___Powdery_mildew': 'Use sulfur-based fungicides. Improve air flow and sunlight by pruning.',
    'Cherry_(including_sour)___healthy': 'No action needed. Continue monitoring and good care.',
    'Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot': 'Rotate crops. Use resistant hybrids and apply fungicides when needed.',
    'Corn_(maize)___Common_rust_': 'Plant resistant varieties. Apply fungicides if infection is severe.',
    'Corn_(maize)___Northern_Leaf_Blight': 'Use resistant hybrids. Apply fungicides at the early sign of disease.',
    'Corn_(maize)___healthy': 'No issues detected. Maintain healthy soil and crop rotation.',
    'Grape___Black_rot': 'Prune infected parts. Apply fungicides like mancozeb or myclobutanil.',
    'Grape___Esca_(Black_Measles)': 'No effective cure. Remove and destroy affected vines. Avoid pruning wounds.',
    'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)': 'Use protective fungicide sprays. Improve air circulation with proper training.',
    'Grape___healthy': 'Healthy vine. Regular pruning and disease monitoring recommended.',
    'Orange___Haunglongbing_(Citrus_greening)': 'No cure available. Remove infected trees. Control psyllid vectors.',
    'Peach___Bacterial_spot': 'Use copper-based sprays. Plant resistant varieties. Avoid overhead watering.',
    'Peach___healthy': 'No issues. Continue regular monitoring and fertilization.',
    'Pepper,_bell___Bacterial_spot': 'Apply copper-based sprays. Practice crop rotation and avoid handling wet plants.',
    'Pepper,_bell___healthy': 'Plant is healthy. Keep monitoring and avoid overwatering.',
    'Potato___Early_blight': 'Use fungicides like chlorothalonil or mancozeb. Rotate crops and avoid overhead irrigation.',
    'Potato___Late_blight': 'Remove infected plants. Use fungicides containing chlorothalonil or mancozeb.',
    'Potato___healthy': 'No treatment required. Maintain healthy growing conditions.',
    'Raspberry___healthy': 'Healthy plant. Keep soil well-drained and monitor regularly.',
    'Soybean___healthy': 'No treatment necessary. Continue using disease-resistant varieties.',
    'Squash___Powdery_mildew': 'Apply neem oil or sulfur-based fungicides. Improve airflow and remove infected leaves.',
    'Strawberry___Leaf_scorch': 'Use resistant varieties. Remove infected leaves and avoid overhead watering.',
    'Strawberry___healthy': 'Healthy plant. Regular mulch and spacing help prevent disease.',
    'Tomato___Bacterial_spot': 'Use copper-based sprays. Avoid overhead watering and handle plants carefully.',
    'Tomato___Early_blight': 'Apply fungicides like chlorothalonil. Rotate crops and prune lower leaves.',
    'Tomato___Late_blight': 'Remove infected plants. Use fungicides and avoid wet foliage.',
    'Tomato___Leaf_Mold': 'Ensure good air circulation. Apply fungicides like copper sprays or chlorothalonil.',
    'Tomato___Septoria_leaf_spot': 'Remove infected leaves. Apply fungicides and avoid wetting foliage.',
    'Tomato___Spider_mites Two-spotted_spider_mite': 'Use insecticidal soap or neem oil. Increase humidity around plants.',
    'Tomato___Target_Spot': 'Apply fungicides and practice crop rotation. Remove infected leaves.',
    'Tomato___Tomato_Yellow_Leaf_Curl_Virus': 'Control whitefly population. Remove infected plants immediately.',
    'Tomato___Tomato_mosaic_virus': 'Remove and destroy infected plants. Disinfect tools and avoid smoking near plants.',
    'Tomato___healthy': 'Healthy tomato plant. Maintain regular care and good spacing.',
  };
  
  const location = useLocation();
  const navigate = useNavigate();

  const prediction = location.state?.prediction || "No prediction found"; // Make sure this is being fetched correctly
  const imageUrl = location.state?.imageUrl || "/detection_image.jpeg"; // fallback

  console.log("Prediction:", prediction); // Add this log to check the prediction value
  console.log("Image URL:", imageUrl); // Add this log to check the image URL

  return (
    <div className="w-screen h-screen bg-green-900 text-white flex flex-col">
      <Navbar />
      <div className="flex flex-grow items-center p-10 gap-10">
        {/* Left Section: Image */}
        <div className="flex-1">
          <img
            src={imageUrl}
            alt="Detected Crop"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>

        {/* Right Section: Detection Result */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">Results</h1>

          <p className="text-lg mb-4 text-yellow-300 font-semibold">
            Predicted Disease: <span className="text-white">{prediction}</span>
          </p>

          <p className="text-lg text-gray-300 mb-4">
            {diseaseCures[prediction]}

          </p>

          <p className="text-lg text-gray-300">
            - AI-Powered Detection<br />
            - Accurate Diagnosis<br />
            - Fast Results
          </p>

          <button
            className="mt-6 bg-green-500 px-6 py-3 rounded-lg hover:bg-green-600 transition text-blue-300 mb-4"
            onClick={() => navigate("/image")}
          >
            Upload New Image
          </button>
        </div>
      </div>
    </div>
  );
}
