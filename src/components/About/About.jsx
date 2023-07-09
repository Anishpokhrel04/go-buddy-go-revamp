import "./about.scss";
import img5 from "../../assets/img5.jpg";
import img2 from "../../assets/img2.jpg";
import { useState } from "react";
const About = () => {
  const [isHidden, setIsHiddden] = useState(false);

  const toggleHiddenContent = () => {
    setIsHiddden(!isHidden);
  };
  return (
    <div className="about">
      <div className="secAbout">
        <div className="img-div">
          <img src={img5} alt="" className="imgs" />
          <img src={img2} alt="" className="img2" />
        </div>
        <div className="txt-div">
          <h1 className="h-1">
            About Us
            <div className="underline">
              <span></span>
            </div>
          </h1>
          <h2>Go Buddy Goo is a travel booking engine based in Nepal</h2> <br />
          <p>
            Founded in 2021, Our primary objective is to offer travelers a
            stress-free and convenient way to make pre-bookings and reservations
            online. At Go Buddy Goo, we have developed a comprehensive
            reservation system that covers a wide range of services, including
            hotels, buses, flights, and more, catering to various upcoming
            travel plans. <br /> <br />
            We take pride in providing a user-friendly platform that enables
            travelers to effortlessly make reservations online. Our platform is
            designed to be intuitive and comfortable to use, ensuring a smooth
            booking experience. With Go Buddy Goo, travelers have access to a
            plethora of options for each service, allowing them to select the
            best-suited choices according to their preferences and requirements.
            One of our key priorities at Go Buddy Goo is exceptional customer
            service. <br />
            <br /> We are committed to delivering outstanding support to our
            customers by offering real-time assistance throughout the booking
            process. Our dedicated customer service team is readily available to
            address any queries or concerns, ensuring that travelers receive
            prompt and helpful responses. To further enhance the customer
            experience, Go Buddy Goo provides immediate booking confirmations.
            Upon completing a reservation, travelers receive instant
            confirmation of their booking, giving them peace of mind and
            eliminating any uncertainties. At Go Buddy Goo, we are passionate
            about revolutionizing the travel booking industry in Nepal. <br />{" "}
            <br /> With our user-friendly platform, extensive service options,
            exceptional customer service, and immediate booking confirmations,
            we strive to make the travel booking process convenient, reliable,
            and stress-free for every traveler.
          </p>
          {isHidden && (
            <p>
              <br /> We are committed to delivering outstanding support to our
              customers by offering real-time assistance throughout the booking
              process. Our dedicated customer service team is readily available
              to address any queries or concerns, ensuring that travelers
              receive prompt and helpful responses. To further enhance the
              customer experience, Go Buddy Goo provides immediate booking
              confirmations. Upon completing a reservation, travelers receive
              instant confirmation of their booking, giving them peace of mind
              and eliminating any uncertainties. At Go Buddy Goo, we are
              passionate about revolutionizing the travel booking industry in
              Nepal. <br /> <br /> With our user-friendly platform, extensive
              service options, exceptional customer service, and immediate
              booking confirmations, we strive to make the travel booking
              process convenient, reliable, and stress-free for every traveler.
            </p>
          )}
          <button onClick={toggleHiddenContent}>
            {isHidden ? " Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
