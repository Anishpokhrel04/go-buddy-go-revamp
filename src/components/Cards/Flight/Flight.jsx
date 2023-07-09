import { useState } from "react";
import "./flight.scss";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Flight = () => {
  const [fromOption, setFromOption] = useState();
  const [toOption, setToOption] = useState();
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);
  const [showPassengerBox, setShowPassengerBox] = useState(false);
  const [selectedOption, setSelectedOption] = useState("flight");

  const headerOption = [
    { value: "flight", label: "Flight" },
    { value: "bus", label: "Bus" },
    { value: "hotel", label: "Hotel" },
  ];

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

  const handleOptionChange = (selectedOption) => {
    setSelectedOption(selectedOption.value);
  };
  const renderCard = () => {
    if (selectedOption === "flight") {
      return (
        <>
          <div className="flight-card">
            <div className="main-textarea-div">
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
                </div>

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
                </div>

                <div className="textarea-div">
                  <label htmlFor="">Trip</label>
                  <Select className="inputs" options={optionWayList}></Select>
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
                    className="date-inputs"
                    selected={departureDate}
                    onChange={handleDepartureDate}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Select a date"
                  />
                </div>

                <div className="textarea-div">
                  <label htmlFor="">Return Date</label>
                  <DatePicker
                    className="date-inputs"
                    selected={returnDate}
                    onChange={handleReturnDate}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Select a date"
                    disabled={!departureDate}
                    minDate={departureDate}
                  />
                </div>
              </div>
            </div>
            <div className="btn">
              <button>Search</button>
            </div>
          </div>
        </>
      );
    } else if (selectedOption === "bus") {
      return (
        <div className="bus-card">
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
              />
            </div>
          </div>
          <div className="bus-btn">
            <button className="bus-button">Search</button>
          </div>
        </div>
      );
    } else if (selectedOption === "hotel") {
      return <div className="hotel-card">this is hotel</div>;
    }
  };
  return (
    <div className="flight">
      {/* <div className="flight-card">
        <div className="main-textarea-div">
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
            </div>

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
            </div>

            <div className="textarea-div">
              <label htmlFor="">Trip</label>
              <Select className="inputs" options={optionWayList}></Select>
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
                className="date-inputs"
                selected={departureDate}
                onChange={handleDepartureDate}
                dateFormat="dd/MM/yyyy"
                placeholderText="Select a date"
              />
            </div>

            <div className="textarea-div">
              <label htmlFor="">Return Date</label>
              <DatePicker
                className="date-inputs"
                selected={returnDate}
                onChange={handleReturnDate}
                dateFormat="dd/MM/yyyy"
                placeholderText="Select a date"
                disabled={!departureDate}
                minDate={departureDate}
              />
            </div>
          </div>
        </div>
        <div className="btn">
          <button>Search</button>
        </div>
      </div> */}
      <div className="option-select">
        <Select
          className="last-select"
          options={headerOption}
          value={{ value: selectedOption, label: selectedOption }}
          onChange={handleOptionChange}
          isSearchable={false}
        />
      </div>
      {renderCard()}
    </div>
  );
};

export default Flight;
