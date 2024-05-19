import React from "react";
import "./service.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import f2 from "../../Assets/f2.jpg";
import d1 from "../../Assets/d1.jpeg";
import w4 from "../../Assets/w4.jpg";
import g1 from "../../Assets/g1.jpeg";
import people from "../../Assets/people.jpg";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Data = [
  {
    id: 1,
    imgSrc: f2,
    destTitle: "Caterings",
  },
  {
    id: 2,
    imgSrc: d1,
    destTitle: "Decorations",
  },
  {
    id: 3,
    imgSrc: w4,
    destTitle: "Halls",
  },
  {
    id: 4,
    imgSrc: g1,
    destTitle: "Games",
  },
  {
    id: 5,
    imgSrc: people,
    destTitle: "Photographys",
  },
];
const Service = () => {
  
  return (
    <section id="Service" className="service">
      <Navbar/>
      <div className="secContainer container">
        <div className="serText">
          <h1 className="title">SERVICES</h1>

          <div className="mainContent grid">
            {Data.map(({ id, imgSrc, destTitle }) => {
              return (
                <div className="Food">
                  <div className="destImage">
                    <img src={imgSrc} alt="Image title" />
                    <div className="overlayInfo">
                      <h2>{destTitle}</h2>
                      <Link to={`/${destTitle.toLowerCase()}`} className="link">
                        <BsFillArrowRightCircleFill className="icon" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
