import "./footer.scss";

import logo from "../../assets/logo.png";
import khalti from "../../assets/khalti.png";
import esewa from "../../assets/esewa.png";

import { AiFillFacebook } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io";
import { AiTwotoneHome } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import { BiSolidMessageAlt } from "react-icons/bi";
import { RiCopyrightFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top-div">
        <div className="first-div">
          <img src={logo} alt="" />
          <p>
            Go Buddy Goo is a Nepal-based travel booking engine founded in 2021.
          </p>
          <div className="icon">
            <AiFillFacebook className="ico" />
            <RiInstagramFill className="ico" />
            <IoLogoYoutube className="ico" />
          </div>
        </div>
        <div className="second-div">
          <h5 className="h-5">Contact Info</h5>
          <div className="icon-text">
            <AiTwotoneHome className="icon" />
            <p>: Sanepa Height, Lalitpur</p>
          </div>
          <div className="icon-text">
            <BiSolidMessageAlt className="icon" />
            <p>: support@gobuddygoo.com</p>
          </div>

          <div className="icon-text">
            <AiFillPhone className="icon" />

            <p>: 015-912655</p>
          </div>
          <div className="icon-text">
            <AiFillPhone className="icon" />
            <p>: +977-9801188597</p>
          </div>
          <div className="icon-text">
            <AiFillPhone className="icon" />
            <p>: +977-9801188598</p>
          </div>
        </div>

        <div className="third-div">
          <h5>Payment Partner</h5>
          <div className="logo-div">
            <img src={khalti} alt="" />
            <img src={esewa} alt="" />
          </div>
        </div>
      </div>
      <hr />
      <div className="last-div">
        <p>
          {" "}
          <RiCopyrightFill className="icon" /> 2023-2030 All Rights Reserved by
          Go Buddy Goo
        </p>
      </div>
    </div>
  );
};

export default Footer;
