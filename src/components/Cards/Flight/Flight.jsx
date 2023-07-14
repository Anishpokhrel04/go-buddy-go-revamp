import { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import "./flights.scss";

//importing icons
import { BiSolidBusSchool, BiSolidPlaneTakeOff } from "react-icons/bi";
import { MdHotel } from "react-icons/md";

const Flight = () => {
  const passengerBoxRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        passengerBoxRef.current &&
        !passengerBoxRef.current.contains(event.target)
      ) {
        setShowPassengerBox(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const [fromOption, setFromOption] = useState();
  const [toOption, setToOption] = useState();
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);
  const [showPassengerBox, setShowPassengerBox] = useState(false);
  const [selectedOption, setSelectedOption] = useState("flight");
  const [formError, setFormError] = useState(false);
  const [selectTripOption, setSelectTripOption] = useState();

  const navigate = useNavigate();

  const optionList = [
    { value: "Kathmandu", label: "kathmandu" },
    { value: "Pokhara", label: "Pokhara" },
    { value: "Bhadrapur", label: "Bhadrapur" },
    { value: "Chitwan", label: "Chitwan" },
    { value: "lukla", label: "lukla" },
  ];

  const optionWayList = [
    {
      value: "One Way",
      label: "One Way",
    },

    {
      value: "Two Way",
      label: "Two Way",
    },
  ];

  function handleFromSelect(data) {
    setFromOption(data);
  }

  function handleToSelect(data) {
    setToOption(data);
  }

  function handleDepartureDate(date) {
    if (returnDate && date > returnDate){
      setReturnDate(null);
    }
    setDepartureDate(date);
  }

  function handleReturnDate(date) {
    setReturnDate(date);
  }
  function incrementAdultCount() {
    setAdultCount((prevCount) => prevCount + 1);
  }

  function decrementAdultCount() {
    if (adultCount > 0) {
      setAdultCount((prevCount) => prevCount - 1);
    }
  }

  function incrementChildCount() {
    setChildCount((prevCount) => prevCount + 1);
  }

  function decrementChildCount() {
    if (childCount > 0) {
      setChildCount((prevCount) => prevCount - 1);
    }
  }

  function togglePassengerBox() {
   setShowPassengerBox((prevShow) => !prevShow);
  }

  function handleValidation() {
    if (!fromOption || !toOption || !departureDate || !selectTripOption) {
      setFormError(true);
      return;
    } else if (selectTripOption === "Two Way" && !returnDate) {
      setFormError(true);
      return;
    } else {
      setFormError(false);
      navigate("/plane");
    }
  }

  function busHandleValidation() {
    if (!fromOption || !toOption || !departureDate ) {
      setFormError(true);
      return;
    }  else {
      setFormError(false);
      navigate("/bus");
    }
  }
  const renderCard = () => {
    if (selectedOption === "flight") {
      return (
        <>
          <div className="flight-card " ref={passengerBoxRef}>
            <div className="main-textarea-div">
              <div className="second-textarea-div">
                <div className="textarea-div">
                  <label htmlFor="">From</label>
                  <Select
                    className={`inputs custom-select ${
                      formError && !fromOption ? "error" : ""
                    }`}
                    options={optionList}
                    placeholder="Eg. Kathmandu"
                    value={fromOption}
                    onChange={handleFromSelect}
                    isSearchable={true}
                  />
                  {formError && !fromOption && (
                    <p className="error-message">From is required</p>
                  )}
                </div>

                <div className="textarea-div">
                  <label htmlFor="">To</label>
                  <Select
                    className={`inputs custom-select ${
                      formError && !toOption ? "error" : ""
                    }`}
                    options={optionList}
                    placeholder="Eg. Kathmandu"
                    value={toOption}
                    onChange={handleToSelect}
                    isSearchable={true}
                  />{" "}
                  {formError && !toOption && (
                    <p className="error-message">To is required</p>
                  )}
                </div>

                <div className="textarea-div">
                  <label htmlFor="">Trip</label>
                  <Select
                    className={`inputs custom-select ${
                      formError ? "error" : ""
                    }`}
                    options={optionWayList}
                    value={selectTripOption}
                    onChange={(option) => setSelectTripOption(option)}
                  ></Select>
                  {formError && !selectTripOption && (
                    <p className="error-message">Trip is required</p>
                  )}
                </div>
              </div>
              <div className="second-textarea-div">
                <div className="textarea-div" onClick={togglePassengerBox}>
                  <label htmlFor="">Passenger</label>
                  <input
                    type="text"
                    className="input"
                    placeholder={`${
                      adultCount + childCount
                    } Passenger - ${adultCount} Adult, ${childCount} Child`}
                    readOnly
                  />
                  {showPassengerBox && (
                    <div className="passenger-box">
                      <div className="passenger-buttons">
                        <button onClick={decrementAdultCount}>-</button>
                        <span>Adult</span>
                        <button onClick={incrementAdultCount}>+</button>
                      </div>
                      <div className="passenger-buttons">
                        <button onClick={decrementChildCount}>-</button>
                        <span>Child</span>
                        <button onClick={incrementChildCount}>+</button>
                      </div>
                    </div>
                  )}
                </div>
                <div className="textarea-div">
                  <label htmlFor="">Depature date</label>
                  <DatePicker
                    className={`date-inputs ${
                      formError && !departureDate ? "error" : ""
                    }`}
                    selected={departureDate}
                    onChange={handleDepartureDate}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Select a date"
                    minDate={new Date()}
                  />
                  {formError && !departureDate && (
                    <p className="error-message">Departure date is required</p>
                  )}
                </div>

                <div className="textarea-div">
                  <label htmlFor="">Return Date</label>
                  <DatePicker
                    className="date-inputs"
                    selected={returnDate}
                    onChange={handleReturnDate}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Select a date"
                    disabled={
                      !departureDate || selectTripOption?.value === "One Way"
                    }
                    minDate={departureDate}
                  />
                  {formError &&
                    selectTripOption?.value == "Two Way" &&
                    !returnDate && (
                      <p className="error-message">Return date is required</p>
                    )}
                </div>
              </div>
            </div>
            <div className="btn">
              <button onClick={handleValidation}>Search</button>
            </div>
          </div>
        </>
      );
    } else if (selectedOption === "bus") {
      return (
        <div className="bus-card">
          <div className="top-div">
            <div className="second-textarea-div">
              <div className="textarea-div">
                <label htmlFor="">From</label>
                <Select
                  className="inputs"
                  options={optionList}
                  placeholder="Eg. Kathmandu"
                  value={fromOption}
                  onChange={handleFromSelect}
                  isSearchable={true}
                />
                {formError && !fromOption && (
                  <p className="error-message">Form is required</p>
                )}
              </div>
            </div>
            <div className="second-textarea-div">
              <div className="textarea-div">
                <label htmlFor="">To</label>
                <Select
                  className="inputs"
                  options={optionList}
                  placeholder="Eg. Kathmandu"
                  value={toOption}
                  onChange={handleToSelect}
                  isSearchable={true}
                />{" "}
                {formError && !toOption && (
                  <p className="error-message">To is required</p>
                )}
              </div>
            </div>

            <div className="second-textarea-div">
              <div className="textarea-div">
                <label htmlFor="">Depature date</label>
                <DatePicker
                  className="date-inputs"
                  selected={departureDate}
                  onChange={handleDepartureDate}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Select a date"
                  minDate={new Date()}
                />
                {formError && !departureDate && (
                  <p className="error-message">Departure date is required</p>
                )}
              </div>
            </div>
          </div>
          <div className="bus-btn">
            <button className="bus-button" onClick={busHandleValidation}>
              Search
            </button>
          </div>
        </div>
      );
    } else if (selectedOption === "hotel") {
      return <div className="hotel-card">this is hotel</div>;
    }
  };
  return (
    <div className="main-card container">
      <div className="Card">
        <div className="option-select">
          <p>
            <Link
              onClick={() => setSelectedOption("flight")}
              className={selectedOption === "flight" ? "active" : ""}
            >
              <BiSolidPlaneTakeOff className="icon" />
              Flight
              <div className="underline">
                <span></span>
              </div>
            </Link>
          </p>
          <hr />
          <p>
            <Link
              onClick={() => setSelectedOption("bus")}
              className={selectedOption === "bus" ? "active" : ""}
            >
              <BiSolidBusSchool className="icon" />
              Bus
              <div className="underline">
                <span></span>
              </div>
            </Link>
          </p>
          <hr />
          <p>
            <Link
              onClick={() => setSelectedOption("hotel")}
              className={selectedOption === "hotel" ? "active" : ""}
            >
              <MdHotel className="icon" />
              Hotel
              <div className="underline">
                <span></span>
              </div>
            </Link>
          </p>
        </div>
        {renderCard()}
      </div>
    </div>
  );
};

export default Flight;
