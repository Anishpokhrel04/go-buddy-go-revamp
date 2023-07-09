import "./App.css";
import Flight from "./components/Cards/Flight/Flight";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login ";
import Navbar from "./components/Navbar/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/flight" element={<Flight />} />
      </Routes>
    </Router>
  );
}

export default App;
