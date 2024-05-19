import React from 'react'
import './mehandhi.css'
import img from'../../Assets/m1.webp'
import img1 from'../../Assets/m6.jpg'
import img2 from'../../Assets/m3.jpg'
import img3 from'../../Assets/m4.jpg'
import { AiFillCheckSquare } from "react-icons/ai";
const Data=[
    {
        id:1,
        imgSrc: img1,
        
    },
    {
        id:1,
        imgSrc: img2,
       
    },
    {
        id:1,
        imgSrc: img3,
        
    },
    {
        id:1,
        imgSrc: img,
        
    },
    
]
const Mehandhi = () =>{
    return (
      <section className="mehandhi">
        <div className="mehContainer container">
          <div className="mehText">
            <h1 className="title">MEHANDHI</h1>
            <div className="subtitle">
              <h3>
                <AiFillCheckSquare className="icon" />
                Budget Tracking & Management
              </h3>
              <h3>
                <AiFillCheckSquare className="icon" />
                Entertainment Management – innovative games
              </h3>
              <h2>
                <AiFillCheckSquare className="icon" />
                Package includes:
              </h2>
              <ul>
                <li>Decoration & Theme Colour</li>
                <li>parking</li>
                <li>Greeting Guests</li>
                <li>games</li>
              </ul>
              <h1>Package starting from 10000rs</h1>
            </div>
          </div>
          <div className="mainContent grid">
            {Data.map(({ id, imgSrc }) => {
              return (
                <div className="mehandhi">
                  <div className="destImage">
                    <img src={imgSrc} alt="Image title" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
}

export default Mehandhi