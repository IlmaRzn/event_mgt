import React from 'react'
import './reunion.css'
import img from'../../Assets/bt1.jpg'
import img1 from'../../Assets/bt2.jpg'
import img2 from'../../Assets/bt3.jpg'
import img3 from'../../Assets/bt5.webp'
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
const Reunion = () =>{
    return (
      <section className="reunion">
        <div className="reContainer container">
          <div className="reText">
            <h1 className="title">REUNION</h1>

            <div className="subtitle">
              <h3>
                <AiFillCheckSquare className="icon" />
                Full scale conceptualization - Creating theme/ style / colors
              </h3>
              <h3>
                <AiFillCheckSquare className="icon" />
                Budget Tracking & Management
              </h3>
              <h3>
                <AiFillCheckSquare className="icon" />
                Entertainment Management – innovative games
              </h3>
              <h3>
                <AiFillCheckSquare className="icon" />
                Handling of Cutouts / Sign boards / Backdrops to match theme
              </h3>
              <h2>
                <AiFillCheckSquare className="icon" />
                Package includes:
              </h2>
              <ul>
                <li>Decoration & Theme Colour</li>
                <li>parking</li>
                <li>Greeting Guests</li>
                <li>Games</li>
              </ul>
              <h1>Package starting from 10000/=</h1>
            </div>
          </div>
          <div className="mainContent grid">
            {Data.map(({ id, imgSrc }) => {
              return (
                <div className="reunion">
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

export default Reunion