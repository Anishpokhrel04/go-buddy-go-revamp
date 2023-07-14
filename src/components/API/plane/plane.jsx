import { BsBagPlusFill } from "react-icons/bs";
import { BiSolidCircle } from "react-icons/bi";

import buddha from "../../../assets/buddha.png";

import "./plane.scss";
import { useState } from "react";

import {useNavigate} from "react-router-dom"


const PlaneData = [
  {
    id: 1,
    imgSrc: buddha,
    uDetails: "U4956",
    fromTime: "9:45",
    fromLocation: "Bhadrapur",
    weight: "25 kg",
    duration: "45 minutes",
    class: "class A",
    toTime: "10:45",
    toLocation: "Kathmandu",
    payType: "refundable",
    npr: "5500",
  },

  {
    id: 2,
    imgSrc: buddha,
    uDetails: "U4952",
    fromTime: "8:55",
    fromLocation: "Bhadrapur",
    weight: "15 kg",
    duration: "45 minutes",
    class: "class E",
    toTime: "9:45",
    toLocation: "Kathmandu",
    payType: "non-refundable",
    npr: "6500",
  },

  {
    id: 3,
    imgSrc: buddha,
    uDetails: "U4952",
    fromTime: "8:55",
    fromLocation: "Bhadrapur",
    weight: "15 kg",
    duration: "45 minutes",
    class: "class E",
    toTime: "9:45",
    toLocation: "Kathmandu",
    payType: "non-refundable",
    npr: "6500",
  },

  {
    id: 1,
    imgSrc: buddha,
    uDetails: "U4952",
    fromTime: "8:55",
    fromLocation: "Bhadrapur",
    weight: "15 kg",
    class: "class E",
    duration: "45 minutes",
    toTime: "9:45",
    toLocation: "Kathmandu",
    payType: "non-refundable",
    npr: "6500",
  },

  {
    id: 1,
    imgSrc: buddha,
    uDetails: "U4952",
    fromTime: "8:55",
    fromLocation: "Bhadrapur",
    weight: "15 kg",
    class: "class E",
    duration: "45 minutes",
    toTime: "9:45",
    toLocation: "Kathmandu",
    payType: "non-refundable",
    npr: "6500",
  },

  {
    id: 1,
    imgSrc: buddha,
    uDetails: "U4952",
    fromTime: "8:55",
    fromLocation: "Bhadrapur",
    weight: "15 kg",
    class: "class E",
    duration: "45 minutes",
    toTime: "9:45",
    toLocation: "Kathmandu",
    payType: "non-refundable",
    npr: "6500",
  },

  {
    id: 1,
    imgSrc: buddha,
    uDetails: "U4952",
    fromTime: "8:55",
    fromLocation: "Bhadrapur",
    weight: "15 kg",
    class: "class E",
    duration: "45 minutes",
    toTime: "9:45",
    toLocation: "Kathmandu",
    payType: "non-refundable",
    npr: "6500",
  },

  {
    id: 1,
    imgSrc: buddha,
    uDetails: "U4952",
    fromTime: "8:55",
    fromLocation: "Bhadrapur",
    weight: "15 kg",
    class: "class E",
    duration: "45 minutes",
    toTime: "9:45",
    toLocation: "Kathmandu",
    payType: "non-refundable",
    npr: "6500",
  },
];


const Plane = () => {
  const navigate = useNavigate();
  
  const [selectedFlight, setSelectedFlight] = useState(null);

  const handleSelectFlight = (flight) => {
    setSelectedFlight(flight);
  };

  const bookingPage =()=>{
    navigate("/booking")
  }
  return (
    <div className="plane container">
      <div className="top-div">
        <div className="notice-div">
          <p>Click here to search other date</p>
        </div>

        <div className="calender"></div>
      </div>
      <div className="main-card">
        <div className="flight-card">
          <p>
            Flight Details
            <div className="underline">
              <span></span>
            </div>
          </p>
          {selectedFlight ? (
            <div className="flight-details-div">
              <p className="p">{selectedFlight.uDetails}</p>
              <p>NPR {selectedFlight.npr}</p>
            </div>
          ) : (
            <p>select a flight</p>
          )}

          <button disabled={!selectedFlight} onClick={bookingPage}>Confirm Booking</button>
        </div>
      </div>

      <div className="gap-div">
        {PlaneData.map((item) => {
          return (
            <div className="second-div" key={item.id}>
              <div className="image-div">
                <img src={item.imgSrc} alt="" />
                <p>{item.uDetails}</p>
              </div>
              <div className="from-time">
                <h2>{item.fromTime}</h2>
                <p>{item.fromLocation}</p>
              </div>

              <div className="weight-div">
                <div className="weight">
                  <p>
                    <BsBagPlusFill className="icon" />
                    {item.weight}
                  </p>
                  <p>
                    <BiSolidCircle className="icon" /> {item.class}
                  </p>
                </div>
                <p>{item.duration}</p>
              </div>

              <div className="to-time">
                <h2>{item.toTime}</h2>
                <p>{item.toLocation}</p>
              </div>

              <div className="price">
                <button className="small-btn">{item.payType}</button>
                <h1>{item.npr}</h1>
                <button
                  className="big-btn"
                  onClick={() => handleSelectFlight(item)}
                >
                  Select
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Plane;
