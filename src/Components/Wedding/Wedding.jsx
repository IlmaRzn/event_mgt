import React from "react";
import "./wedding.css";
import img from "../../Assets/w3.jpeg";
import img1 from "../../Assets/w4.jpg";
import img2 from "../../Assets/w5.jpg";
import img3 from "../../Assets/w6.jpg";
import { AiFillCheckSquare } from "react-icons/ai";

const Data = [
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
    imgSrc: img,
  },
];

const Wedding = () => {
  return (
    <section className="wedding">
      <div className="wedContainer container">
        <div className="wedText">
          <h1 className="title">WEDDING</h1>
          <div className="subtitle">
            <h3>
              <AiFillCheckSquare className="icon" />
              Preparation of a customer-friendly budget based on your financial
              specifications
            </h3>
            <h3>
              <AiFillCheckSquare className="icon" />
              Handpicking of the idyllic venues by our event planning crew
            </h3>
            <h3>
              <AiFillCheckSquare className="icon" />
              Preparation of an appropriate time frame and scheduling of work
              upon the initial consultation
            </h3>
            <h2>
              <AiFillCheckSquare className="icon" />
              Package includes:
            </h2>
            <ul>
              <li>Decoration & Theme Colour</li>
              <li>parking</li>
              <li>Greeting Guests</li>
            </ul>
            <h1>Package starting from 10000rs</h1>
          </div>
        </div>
        <div className="mainContent">
          {Data.map(({ id, imgSrc }) => (
            <div className="weddingItem" key={id}>
              <div className="destImage">
                <img src={imgSrc} alt="Image title" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Wedding;
