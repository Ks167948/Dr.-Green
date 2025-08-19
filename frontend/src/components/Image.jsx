import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export default function Image() {
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile) return;

    setImage(URL.createObjectURL(selectedFile)); // show preview
    setFile(selectedFile); // store file for upload
    setFileName(selectedFile.name);
  };

  const handleRecognition = async () => {
    if (!file) return;

    setLoading(true);
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch("http://localhost:8000/imagecheck/upload/", {  // Ensure the URL ends with a slash
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        navigate("/detection", {
          state: {
            imageUrl: image,
            prediction: data.prediction,
          },
          
        }
      );

      } else {
        alert("Prediction failed");
      }
    } catch (error) {
      console.error("Prediction error:", error);
      alert("Something went wrong during recognition");
    } finally {
      setLoading(false)
      console.log(state);
    }

  };

  const removeImage = () => {
    setImage(null);
  };
//   console.log("Image URL:", data.image_url);
// console.log("Prediction:", data.prediction);

  return (
    <div className="w-screen h-screen bg-gray-900 text-white flex flex-col items-center">
      <Navbar />
      <div className="pt-30 pb-10 flex flex-col items-center gap-4">
        <div className="p-6 w-[30rem] min-h-[12rem] bg-gray-800 shadow-lg rounded-lg border border-gray-700 flex justify-center items-center"
             style={{
               backgroundImage: `
                 linear-gradient(45deg, #f3f4f6 25%, transparent 25%),
                 linear-gradient(-45deg, #f3f4f6 25%, transparent 25%),
                 linear-gradient(45deg, transparent 75%, #f3f4f6 75%),
                 linear-gradient(-45deg, transparent 75%, #f3f4f6 75%)`,
               backgroundSize: '20px 20px',
               backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
               backgroundColor: '#ffffff'
             }}
        >
          <div className="text-sm font-medium text-white justify-center flex flex-col">
            <label
              htmlFor="image-upload"
              className="mb-4 flex flex-col items-center gap-2 cursor-pointer bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition w-40 justify-center text-white"
            >
              Upload Image
            </label>
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />

            {/* Image Preview */}
            {image && (
              <>
                <img
                  src={image}
                  alt="Uploaded"
                  className="max-w-[200px] max-h-[200px] mt-2 rounded-lg shadow-md"
                />
                <p className="text-sm text-right text-black">{fileName}</p>
              </>
            )}

            {/* Go to Recognition Button */}
            <button
              onClick={handleRecognition}
              className="mt-4 text-white w-40 bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition"
              disabled={!image}
            >
              Go to Recognition
            </button>
          </div>
        </div>
      </div>

      {/* Footer with Steps */}
      <footer className="bg-gray-950 py-1 px-6 border-t border-gray-800 mt-8 pb-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">How to use the tool in 3 easy steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {/* Step 1 */}
            <div className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300">
              <span className="text-xs font-semibold text-purple-400 bg-purple-900/20 px-3 py-1 rounded-full mb-2 inline-block">
                Step 1
              </span>
              <h3 className="text-lg font-bold text-white mb-2">Upload an image</h3>
              <p className="text-sm text-gray-300">
                Click the <strong>"Upload Image"</strong> button and select a photo (JPG/PNG). Make sure the image is clear for better results.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300">
              <span className="text-xs font-semibold text-purple-400 bg-purple-900/20 px-3 py-1 rounded-full mb-2 inline-block">
                Step 2
              </span>
              <h3 className="text-lg font-bold text-white mb-2">Preview & manage</h3>
              <p className="text-sm text-gray-300">
                The uploaded image will appear on screen. You can remove or re-upload it as needed before proceeding.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300">
              <span className="text-xs font-semibold text-purple-400 bg-purple-900/20 px-3 py-1 rounded-full mb-2 inline-block">
                Step 3
              </span>
              <h3 className="text-lg font-bold text-white mb-2">Go to Recognition</h3>
              <p className="text-sm text-gray-300">
                Once you're happy with the image, click <strong>"Go to Recognition"</strong> to analyze the uploaded photo.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
