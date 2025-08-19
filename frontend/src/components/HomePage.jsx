import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function HomePage() {
  return (
    <div className="flex flex-col w-screen h-screen bg-gray-100">
      <Navbar />

      {/* Main Content */}
      <main className="flex flex-1 items-center justify-center text-center px-4">
        <div>
          <h1 className="text-4xl font-bold text-green-700 mb-4">
            Welcome to Dr Green
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Your one-stop solution for advanced image selection, detection, and recognition.
            Explore our powerful tools and bring intelligence to your images effortlessly.
          </p>

          <div className="text-white mt-6 flex gap-4 justify-center">
            <Link
              to="/image"
              className="bg-green-700 text-white px-6 py-3 justify-center text-center rounded-lg text-base hover:bg-green-600 transition"
            >
              <div className="text-black">
              Get Started</div>
            </Link>

            <Link
            to="https://eos.com/blog/crop-diseases/"
              className="bg-green-700 text-white px-6 py-3 justify-center text-center rounded-lg text-base hover:bg-green-600 transition"
            >
              <div className="text-black" >
              Learn More
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
