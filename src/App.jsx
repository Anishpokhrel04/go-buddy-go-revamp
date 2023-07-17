import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login ";
import Bus from "./components/API/Bus/Bus"
import Flight from "./components/Cards/Flight/Flight";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Plane from "./components/API/plane/plane";
import Booking from "./components/API/plane/booking/Booking";
import { MyContext } from "./components/context/Mycontext";
function App() {
  return (
    <MyContext.Provider value={{}}>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/flight" element={<Flight />} />
          <Route path="/login" element={<Login />} />
          <Route path="/plane" element={<Plane />} />
          <Route path="/bus" element={<Bus />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </Router>
    </MyContext.Provider>
  );
}

export default App;
