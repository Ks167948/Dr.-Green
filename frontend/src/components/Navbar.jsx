import { Link } from "react-router-dom";
import logo from "../assets/icon.svg";

function Navbar() {
  return (
    <header className="w-full bg-white shadow-lg p-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo & Brand Name */}
        <Link className="flex items-center gap-3" to="/" >
      
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
          <h1 className="text-black text-2xl font-semibold tracking-wide">
            Dr. Green
          </h1>
        </Link>

        {/* Navigation Links */}
        <nav className="flex gap-6">
          {[
            { name: "Home", path: "/" },
            { name: "Image Selection", path: "/image" },
            { name: "Recognition", path: "/detection" },
            // { name: "Recognition", path: "/recognition" },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-gray-700 font-medium px-4 py-2 rounded-lg hover:text-black"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Log in / Sign up Links */}
        <div className="flex gap-4">
          <Link
            to="/login"
            className=" text-black font-medium px-4 py-2 rounded-lg hover:bg-gray-200 transition"
          >
            Log in
          </Link>

          <Link
            to="/signup"
            className="text-black font-medium px-4 py-2 rounded-lg hover:bg-gray-200 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
