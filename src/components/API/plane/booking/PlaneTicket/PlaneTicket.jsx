import "./planeticket.scss";

import esewa from "../../../../../assets/esewa.png";
import khalti from "../../../../../assets/khalti.png";
import { useEffect, useState } from "react";

const PlaneTicket = () => {
  const [items, setItems] = useState();
  const [nprValue, setNprValue] = useState(0);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("plane"));
    if (items) {
      setItems(items);
    }
  }, []);

  useEffect(() => {
    const nprValue = localStorage.getItem("npr");
    console.log("nprValue:", nprValue);
    const numericNprValue = parseFloat(nprValue);
    setNprValue(numericNprValue);
  }, []);

  const formatDateToYearMonthDay = (isoDateString) => {
    const date = new Date(isoDateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  var price = nprValue * items?.adultCount;
  var surcharge = 0;
  var tax = price * 0.13;
  function totalAmount() {
    return price + surcharge + tax;
  }
  return (
    <div className="planeticket">
      <div className="payment-card">
        <h4>
          Payment method
          <div className="underline">
            <span></span>
          </div>
        </h4>

        <div className="ticket-amount-div">
          <p>Ticket Amount:</p>
          <p className="amount"> {`RS ${totalAmount()}`}</p>
        </div>
        <p className="notice">Please select any payment method</p>

        <div className="payment-img">
          <div className="esewa">
            <img src={esewa} alt="" />
          </div>
          <div className="khalti">
            <img src={khalti} alt="" />
          </div>
        </div>
        <div className="btn-div">
          <button>Confirm Booking</button>
        </div>
      </div>
      <div className="booking-details">
        <h5>
          Your Booking Details
          <div className="underline">
            <span></span>
          </div>
        </h5>
        <div className="location-div">
          <div className="from-div">
            <h4>BDP</h4>
            <p>{items?.toOption?.value}</p>
          </div>
          <div className="img-div">
            <img
              src="data:image/png;base64,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"
              alt=""
            />
            <p className="date">
              {formatDateToYearMonthDay(items?.departureDate)}
            </p>
          </div>
          <div className="form-location">
            <h4>KTM</h4>
            <p>{items?.fromOption?.value}</p>
          </div>
        </div>

        <div className="bill-div">
          <h4>Price Breakdown</h4>
          <div className="amount-details particular ">
            <p>Particular</p>
            <p>Total</p>
          </div>

          <div className="amount-details">
            <p>{`Passenger *${items?.adultCount + items?.childCount}`}</p>
            <p>{price}</p>
          </div>

          <div className="amount-details">
            <p>Surcharge</p>
            <p>{surcharge}</p>
          </div>

          <div className="amount-details">
            <p>Tax</p>
            <p>{tax}</p>
          </div>

          <div className="amount-details total">
            <p>Total</p>
            <p>{totalAmount()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaneTicket;
