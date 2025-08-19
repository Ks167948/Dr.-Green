
import { useLocation ,useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export default function Recognition() {
  const navigate = useNavigate();
  const location = useLocation();
  const imageUrl = location.state?.imageUrl; 

  const handleDetection = async () => {
    if (!imageUrl) {
      alert("No image found!");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image_url: imageUrl }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert("Disease recognized successfully!\nPrediction: " + data.prediction);
        navigate("/detection", { state: { prediction: data.prediction, imageUrl: imageUrl, }, }); // send prediction
      } else {
        alert("Prediction failed: " + data.error);
      }
    } catch (error) {
      console.error("Error predicting:", error);
      alert("Error while predicting disease.");
    }
  };
  

  const images = [
    { src: "/rice.jpeg", text: "RICE LEAF SMUT" },
    { src: "/rice leaf smuf.jpeg", text: "RICE STACK BURN" },
    { src: "/maize.webp", text: "MAIZE GERY LEAF SPOT" },
    { src: "/wheat.jpeg", text: "WHAET CROP DISEASE" },
    { src: "/tomato.jpeg", text: "tomato" },
    { src: "/cucumber.jpeg", text: "cucumber " },
  ];

  return (
    <div className="w-screen h-screen bg-blue-900 text-black flex flex-col">
      <Navbar />

      <div className="bg-blue-900 flex-grow flex flex-col items-center p-10">
        {/* <h1 className="text-4xl font-bold mb-6">Recognition Page</h1> */}
        <br></br>
        <br></br>
        <br></br>
        <p className="text-lg text-blue-300 mb-6">
          The uploaded image has been analyzed. Click below to detect the disease.
        </p>

        {/* Grid for Images */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {images.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white p-3 rounded-lg shadow-md cursor-pointer"
            >
              <img
                src={item.src}
                alt={item.text}
                className="w-70 h-70 object-cover rounded-md transition-transform transform group-hover:scale-105"
              />
              <p className="text-black text-sm text-center mt-2">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Detect Button */}
        <button
          onClick={handleDetection}
          className="bg-green-500 text-black px-6 py-3 rounded-lg text-lg hover:bg-yellow-400 transition"
        >
          Detect
        </button>
      </div>
    </div>
  );
}


