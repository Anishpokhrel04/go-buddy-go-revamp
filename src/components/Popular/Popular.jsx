import "./popular.scss";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.jpg";

import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";
import { useState } from "react";

const PopularCardData = [
  {
    id: 1,
    imgSrc: img4,
    cardTitle: "Pokhara",
    stays: "16 Stays",
  },
  {
    id: 2,
    imgSrc: img5,
    cardTitle: "Lukla",
    stays: "16 Stays",
  },

  {
    id: 3,
    imgSrc: img6,
    cardTitle: "Hetuda",
    stays: "16 Stays",
  },

  {
    id: 4,
    imgSrc: img7,
    cardTitle: "Pokhara",
    stays: "16 Stays",
  },
];

const Popular = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const goToPrevCard = () => {
    setCurrentCard((pervCard) =>
      pervCard === 0 ? PopularCardData.length - 1 : pervCard - 1
    );
  };

  const goToNextCard = () => {
    setCurrentCard((pervCard) =>
      pervCard === PopularCardData.length - 1 ? 0 : pervCard + 1
    );
  };
  return (
    <div className="popular container">
      <h1>
        Popular Destination
        <div className="underline">
          <span></span>
        </div>
      </h1>
      <div className="icon-text">
        <GrFormPreviousLink className="icon" onClick={goToPrevCard} />

        {PopularCardData.map((item, index) => {
          if (index === currentCard) {
            return (
              <div className="popular-card" key={item.id}>
                <div className="img-div">
                  <img src={item.imgSrc} alt="" />

                  <div className="text-div">
                    <h3>{item.cardTitle}</h3>
                    <br />
                    <p>{item.stays}</p>
                  </div>
                </div>
              </div>
            );
          }
          return null;
        })}
        <GrFormNextLink className="icon icons" onClick={goToNextCard} />
      </div>
    </div>
  );
};

export default Popular;
