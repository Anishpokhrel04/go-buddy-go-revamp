import "./services.scss";
import buss from "../../assets/bus.png";
import hotel from "../../assets/hoteel.png";
import plane from "../../assets/plane.png";

const Services = () => {
  return (
    <div className="services container">
      <div className="div">
        <h2 className="h-2">
          Our Services
          <div className="underline">
            <span></span>
          </div>
        </h2>
        <h3>What We Offer ?</h3>
        <p>
          We provide you and your customers with the highest level of service
          possible at a competitive price. We take immeasurable pride in the
          fact that we are renowned for assisting individuals in achieving their
          dream of traveling to Nepal.
        </p>
      </div>
      <div className="service-card">
        <div className="bus-card">
          <div className="img-div">
            <img src={buss} alt="" />
          </div>
          <div className="overlay">
            <div className="text">28+ millon hotels option.</div>
          </div>
          <div className="btn-div">
            <button>Bus Ticket</button>
          </div>
        </div>
        <div className="bus-card">
          <div className="img-div">
            <img src={hotel} alt="" />
          </div>
          <div className="overlay">
            <div className="text">
              Enjoy the convenience of booking your bus tickets online.
            </div>
          </div>
          <div className="btn-div">
            <button>Hotel Rooms</button>
          </div>
        </div>
        <div className="bus-card">
          <div className="img-div">
            <img src={plane} alt="" className="img" />
          </div>
          <div className="overlay">
            <div className="text">
              Experience the convenience of booking all your domestic flights
              effortlessly.
            </div>
          </div>
          <div className="btn-div">
            <button>Plane Ticket</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
