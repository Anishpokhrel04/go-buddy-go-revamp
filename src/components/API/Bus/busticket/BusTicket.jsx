import { useState } from "react";
import "./busticket.scss";

import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const BusTicket = () => {
  const navigate = useNavigate();
  const [formError, setFormError] = useState(false);
  const [fullName, setFullName] = useState();
  const [age, setAge] = useState();
  const [contactName, setContactName] = useState();
  const [contactNumber, setContactNumber] = useState();
  const [contactEmail, setContactEmail] = useState();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function handleFullName(data) {
    setFullName(data);
  }

  function handleAge(data) {
    setAge(data);
  }

  function handleContactName(data) {
    setContactName(data);
  }

  function handleContactNumber(data) {
    setContactNumber(data.target.value);
  }

  function handleContactEmail(data) {
    setContactEmail(data);
  }

  function handleValidation() {
    if (
      !fullName ||
      !age ||
      !contactName ||
      !contactNumber ||
      !emailRegex.test(contactEmail)
    ) {
      setFormError(true);
      return;
    } else {
      navigate("/payment");
      setFormError(false);
    }
  }
  return (
    <div className="bus-ticket">
      <div className="passenger-div">
        <h4>
          Passenger Details
          <div className="underline">
            <span></span>
          </div>
        </h4>

        <div className="name-icon-div">
          <MdAirlineSeatReclineNormal className="icon" />
          <div className="full-name">
            <label htmlFor="">Full Name</label>
            <input type="text" onChange={handleFullName} />
            {formError && !fullName && (
              <p className="error-message">Full name is required</p>
            )}
          </div>

          <div className="age">
            <label htmlFor="">Age</label>
            <input
              type="number"
              onChange={handleAge}
              max={2}
              onKeyPress={(e) => {
                const onlyNumeric = /^[0-9]*$/;
                if (!onlyNumeric.test(e.key)|| age.length>=2) {
                  e.preventDefault();
                }
              }}
            />

            {formError && !age && (
              <p className="error-message">Age is required</p>
            )}
          </div>
        </div>

        <h4>Contact-details</h4>
        <div className="contact-details">
          <div className="bording-point">
            <label htmlFor="">Bording Point</label>
            <select>
              <option value="1">Gongabu Bus Park</option>
              <option value="1">Kalanki</option>
            </select>
          </div>

          <div className="contact-name">
            <label htmlFor="">Contact Name</label>
            <input type="text" onChange={handleContactName} required />
            {formError && !contactName && (
              <p className="error-message"> Contact Name is required</p>
            )}
          </div>
        </div>

        <div className="last-div">
          <div className="contact">
            <label htmlFor="">Contact Number</label>
            <input
              type="number"
              onChange={handleContactNumber}
              onKeyPress={(e) => {
                const onlyNumeric = /^[0-9]*$/;
                if (!onlyNumeric.test(e.key)) {
                  e.preventDefault();
                }
              }}
              required
            />
            {formError && !contactNumber && (
              <p className="error-message">
                please enter 10 digit valid number
              </p>
            )}
          </div>

          <div className="contact">
            <label htmlFor="">Contact Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => handleContactEmail(e.target.value)}
              required
            />

            {formError && !contactEmail && (
              <p className="error-message">Email is required</p>
            )}
            {formError && contactEmail && !emailRegex.test(contactEmail) && (
              <p className="error-message">Invalid email format</p>
            )}
          </div>
        </div>
        <div className="btn-div">
          <button onClick={handleValidation}>Proceed to Payment</button>
        </div>
      </div>
      <div className="ticket-div">
        <h4>
          Your Booking Details
          <div className="underline">
            <span></span>
          </div>
        </h4>

        <h2>Metro Deluxe</h2>

        <div className="date-div">
          <p>Jul 20, 2023</p>
          <p>Journey hour: 10 hr</p>
        </div>
        <div className="img-division">
          <img
            src="data:image/png;base64,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"
            alt=""
          />
        </div>

        <div className="location-div">
          <p>Kathmandu</p>
          <p>Jhapa</p>
        </div>
        <div className="bill-details">
          <div className="bus-type">
            <p>Bus Type</p>
            <p className="p">Deluxe Bus</p>
          </div>

          <div className="bus-type">
            <p>Shift</p>
            <p className="p">Night</p>
          </div>

          <div className="bus-type">
            <p>Fare</p>
            <p className="p">NPR 1555</p>
          </div>

          <div className="bus-type">
            <p>Departure Time</p>
            <p className="p">03:30 PM</p>
          </div>
        </div>

        <h4 className="h-4">Selected Seats</h4>
        <div className="seat-num">
          <div className="seat-det">
            <MdAirlineSeatReclineNormal className="icon" />

            <p>A-1</p>
          </div>

          <div className="seat-det">
            <MdAirlineSeatReclineNormal className="icon" />

            <p>A-2</p>
          </div>
          <div className="seat-det">
            <MdAirlineSeatReclineNormal className="icon" />

            <p>A-3</p>
          </div>
        </div>

        <div className="price-div">
          <p className="price">Price Summary</p>
          <div className="last">
            <p>Total(1 Setas)</p>
            <p>NPR 1555</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusTicket;
