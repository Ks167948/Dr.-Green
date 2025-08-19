import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Image from './components/Image';
import HomePage from './components/HomePage';
import Recognition from './components/Recognition';
import Detection from './components/Detection';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/image" element={<Image />} />
        {/* <Route path="/recognition" element={<Recognition />} /> */}
        <Route path="/detection" element={<Detection/>} />
      </Routes>
    </Router>
  );
}

export default App;
