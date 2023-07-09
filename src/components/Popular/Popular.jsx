import "./popular.scss";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.jpg";

import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";

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
  return (
    <div className="popular">
      <h1>
        Popular Destination
        <div className="underline">
          <span></span>
        </div>
      </h1>
      <GrFormPreviousLink className="icon" />

      {PopularCardData.map((item) => {
        return (
          <div className="popular-card" key={item.id}>
            <div className="img-div">
              <img src={item.imgSrc} alt="" />
            </div>
            <div className="text-div">
              <h3>{item.cardTitle}</h3>
              <p>{item.stays}</p>
            </div>
          </div>
        );
      })}
      <GrFormNextLink className="icon" />
    </div>
  );
};

export default Popular;
