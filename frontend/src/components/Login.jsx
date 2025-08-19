import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login attempted with:", { email, password });
  };

  return (
    <div
      className="w-screen h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: "url('loginimage.jpeg')", // Replace with your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        
      }}
    >
       <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96 border border-gray-700">
    <h1 className="text-3x font-bold text-center mb-6">Login</h1>

    <form onSubmit={handleLogin} className="flex flex-col gap-4">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />

      <button
        type="submit"
        className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
      >
        Login
      </button>
    </form>

    <p className="mt-4 text-sm text-center">
      Don't have an account?{" "}
      <span
        className="text-blue-400 cursor-pointer hover:underline"
        onClick={() => navigate("/signup")}
      >
        Sign Up
      </span>
    </p>
  </div>
</div>
  );
}
