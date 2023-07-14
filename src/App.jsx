import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login ";

import Flight from "./components/Cards/Flight/Flight";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Plane from "./components/API/plane/plane";
import Bus from "./components/Cards/Bus/Bus";
function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/flight" element={<Flight />} />
        <Route path="/login" element={<Login />} />
        <Route path="/plane" element={<Plane />} />
        <Route path="/bus" element={<Bus />} />
      </Routes>
    </Router>
  );
}

export default App;
