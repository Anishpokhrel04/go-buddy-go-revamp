import "./navbar.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { BiSolidBusSchool, BiSolidPlaneTakeOff } from "react-icons/bi";
import { FaHome, FaTimes } from "react-icons/fa";
import { MdHotel } from "react-icons/md";
import { RiAccountCircleFill } from "react-icons/ri";

import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropdown, setDropdown] = useState("navLists");

  const showNavbar = () => {
    setDropdown("navLists  dropdown");
  };

  const closeNavbar = () => {
    setDropdown("navLists");
  };
  return (
    <div className="navbar container">
      <div className="header">
        <p>LOGO</p>

        <ul onClick={closeNavbar} className={dropdown}>
          <button className=" nav-close-btn" onClick={closeNavbar}>
            <FaTimes />
          </button>
          <li className="navItems">
            <Link to="/home" className={`link `}>
              <FaHome className="icon" /> Home
            </Link>
          </li>

          <li className="navItems" id="flight">
            <Link to="/flight" className="link">
              <BiSolidPlaneTakeOff className="icon" />
              Flight
            </Link>
          </li>

          <li className="navItems">
            <Link href="/bus" className="link">
              <BiSolidBusSchool className="icon" /> Bus
            </Link>
          </li>

          <li className="navItems">
            <Link
              to="https://www.booking.com/index.html?aid=2305933"
              className="link"
            >
              <MdHotel className="icon" /> Hotel
            </Link>
          </li>
          <Link to="/login" className="Link">
            <div className="icons iconss">
              <RiAccountCircleFill className="icon" />
              <h3 className="h-33">Login</h3>
            </div>
          </Link>
        </ul>

        <button className="nav-btn" onClick={showNavbar}>
          <AiOutlineMenu className="icon" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
