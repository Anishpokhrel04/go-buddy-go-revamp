import "./plane.scss";

import { BiSolidCircle } from "react-icons/bi";

import buddha from "../../../assets/buddha.png";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Plane = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("plane"));
    if (items) {
      setItems(items);
    }
  }, []);

  console.log(items, "íteo mero");

  const PlaneData = [
    {
      id: 1,
      imgSrc: buddha,
      uDetails: "U4956",
      fromTime: "9:45",
      fromLocation: `${items?.fromOption?.value}`,
      weight: "25 kg",
      duration: "45 minutes",
      class: "class A",
      toTime: "10:45",
      toLocation: `${items?.toOption?.value}`,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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
  const navigate = useNavigate();

  const [selectedFlight, setSelectedFlight] = useState(null);

  const handleSelectFlight = (flight) => {
    setSelectedFlight(flight);
  };

  const bookingPage = (id) => {
    const selectedPlane = PlaneData.find((plane) => plane.id === id);

    const nprValue = selectedPlane.npr;
    localStorage.setItem("npr", nprValue);
    console.log("nprValue:", nprValue);
    navigate("/booking");
  };

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

          <button
            disabled={!selectedFlight}
            onClick={() => bookingPage(selectedFlight.id)}
          >
            Confirm Booking
          </button>
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
                    <img
                      className="img"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAVCAYAAAByrA+0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFmSURBVHgB7VJNSwJRFD1veoOmTr2gBGsxQrWoTVPYWvsHtkpczUYL2vgP+gvtClq4DSKSNi2L1hIuQoI2SliYoUOpmPPVNCY5fiyElp3Nu+fdc+6973EJfhBjexFAD6IPBojCgcudKseFb0474oRswljjQDP9BgqDGURPW+EWfqsnD+JsX8QIxNhuupvnMCZolKUYIU1JN9WU1UkZJiLElDTzc9sKD+mir34d8OqSd3MWnvsyQn7VIT4vCfAsCcBDVZpAskanXbokChoQ4JG95VEJzsHr60yav2tiZcbKCRzCYgvZMh+kvdWaGsHqhgfissvmry9Wt5bmfEMvCfnbaFwWkO9yaqI44R1tEAUd4YW2Q3D05DSM/a3/hj81NFRin7RUpzfWPkY8jy1UqvyAsFIzAbeKq6IbJkjGtu2w5IV/no++PRuRwdp6dHKKS3286+tnyknOvooxORhnCWnYKDKTWW/uC3Tda9DStdmeAAAAAElFTkSuQmCC"
                      alt=""
                    />
                    {item.weight}
                  </p>
                  <p>
                    <BiSolidCircle className="icon" /> {item.class}
                  </p>
                </div>
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
                <p>
                  <img
                    className="img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOBSURBVHgBpZRtTFNXGMf/Bfqy1fZeJKAI7ep7pxZqwLkY3K4zS+aAcMk+mDVklC1bgA/LTJagUaMmRvlAAnxQE2JEjUETE8Fg8TWIsWiMECvFVxQuxUQQQlsp2halnnOkTWmqMfpPzr3nPOc5v/vc5zznyBAja8khYY4288ckRWZ9Xd1qD75EP2/cUpdlKgh9o88JVZa37sJnKCncWWhY2yyTJYiF+bsxPPIYrbbdAjHviXbWaFIb0+evMIegKOvru+z4GFBYsiRPXJP7OwZd3bhub8DQUHeZWzTwdp/f/MAbzG566jNrVxRbtVw6Bvo7S8mauEDZzJvPWLDyjl6Xyw+PPMBPG/7jO8+Udhg5hZk0PitZCU6ewByd7gCuv3iNVGXi0do1KXuST0lSPCCD0od1sUa4kZjTnK/qw5blcgYanHwD1+QUc8riCVyRgKb+CWqXqhZzq5NbJE88IFPDurSB8cBbQ8VyDvt7xuFMWYZfiwuh1y2A1+tD24V24HY7qnNS2Edqej0dLUOTG2JzyFT7XYo47n9rsCzSwNIbQlVtA6pWGSPzXu8ECSEE0/8VsPzxD5pWyfF9qlIgQIFMd1CfhGjgfqenNF+nxsFRJfYdPgRTFIzKfuM2OK2WRXvgeAO23vejwshD1KkjJRYGGkwrNw0UGNJEhELQFZewRbGy3+xC3rpc1qfzuk0i7GSD1qaqBGISooFF2dmiYenXQZx79ioSme18O5z3HrL+X+U74H05MesDls0ietxBrJ+nosPsaOC1C5eqO+iOeqemI9FRsLP3EQp/+xOJST9gdFQ9C0j9nASoV8vpkI8GOsbGBopdpDz06iQGCS+wbC7CiSP1yEh/go1CJuKJBhGbQypPjzvgKMhUw9nVPWsBx2mwa3slyv8umWWnm7Q+TYVBH6tRRywQbc9etTDjxZOR3H1Mbc2tyJv3FStyorv0kRjjc9cdmC7faZ6ramy9BmQsirvbVNU1BzG/6zyWaeSovDV2lJiOxQP6He7ALSBk3bZUiU6bDbYeieUoEAiQFoSNnJTqvTUwPrbDslCDX648l9zB6TKaMgqQfeBvrFtNfOM201w2sI/4I2dZP0eOPJI3F8lb0dVhqX9iih47KbzwQ0Aqg5GTN/77LS+YkhXkQnj/M/S2OS35PC2uyToyrA9H9inACJi0IszU2Uw0Z2NBYb0DENJF9y0HBBUAAAAASUVORK5CYII="
                    alt=""
                  />
                  {item.duration}
                </p>
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
