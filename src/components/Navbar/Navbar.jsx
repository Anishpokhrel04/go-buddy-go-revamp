import "./navbar.scss";

import { RiAccountCircleFill } from "react-icons/ri";
import { BiSolidPlaneTakeOff } from "react-icons/bi";
import { BiSolidBusSchool } from "react-icons/bi";
import { MdHotel } from "react-icons/md";
import { FaHome } from "react-icons/fa";

import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="header">
        <img src={logo} alt="" />
      </div>

      <ul className="navLists">
        <li className="navItems">
          <Link to="/home" className="link">
            <FaHome className="icon" /> Home
          </Link>
        </li>

        <li className="navItems">
          <Link to="/flight" className="link">
            <BiSolidPlaneTakeOff className="icon" />
            Flight
          </Link>
        </li>

        <li className="navItems">
          <Link to="/flight" className="link">
            <BiSolidBusSchool className="icon" /> Bus
          </Link>
        </li>

        <li className="navItems">
          <Link to="/flight" className="link">
            <MdHotel className="icon" /> Hotel
          </Link>
        </li>
        <Link to="/login">
          <div className="icons">
            <RiAccountCircleFill className="icon" />
            <h3>Login</h3>
          </div>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
