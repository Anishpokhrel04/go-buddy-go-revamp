import "./home.scss";
import "../Cards/Flight/flight.scss";
import Flight from "../Cards/Flight/Flight";

import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import About from "../About/About";
import Services from "../Services/Services";

import "react-datepicker/dist/react-datepicker.css";
import Popular from "../Popular/popular";
import Footer from "../Footer/footer";

const ImageData = [
  {
    id: 1,
    imgSrc: img1,
  },

  {
    id: 2,
    imgSrc: img2,
  },

  {
    id: 3,
    imgSrc: img3,
  },

  {
    id: 4,
    imgSrc: img4,
  },

  {
    id: 5,
    imgSrc: img5,
  },

  {
    id: 6,
    imgSrc: img6,
  },

  {
    id: 7,
    imgSrc: img7,
  },
];

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 5000,
  autoplaySpeed: 3000,
  cssEase: "linear",
  arrows: false,
};

const Home = () => {
  return (
    <>
      <div className="home">
        <Slider {...settings}>
          {ImageData.map((item) => {
            return (
              <div className="img-div" key={item.id}>
                <img src={item.imgSrc} alt="" />
              </div>
            );
          })}
        </Slider>
        <div className="secHome">
          <h3>
            Explore Nepal's Breathtaking Charm with{" "}
            <h3 className="h-3">Go Buddy Goo</h3>{" "}
          </h3>
          <h5>Your Gateway to Unforgettable Adventures!</h5>
        </div>

        <div className="flight">
          <Flight />
        </div>
      </div>
      <div className="about">
        <About />
      </div>
      <div className="services">
        <Services />
      </div>
      <Popular />
      <Footer />
    </>
  );
};

export default Home;
