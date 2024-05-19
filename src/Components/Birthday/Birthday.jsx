import React from 'react'
import './birthday.css'
import img from'../../Assets/b6.jpg'
import img1 from'../../Assets/B1.png'
import img2 from'../../Assets/B4.webp'
import img3 from'../../Assets/bd2.jpg'
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
const Birthday = () =>{
    return (
      <section className="birthday">
        <div className="bdyContainer container">
          <div className="bdyText">
            <h1 className="title">BIRTHDAY</h1>

            <div className="subtitle">
              <h3>
                <AiFillCheckSquare className="icon" />
                Design & Management of invitations
              </h3>
              <h3>
                <AiFillCheckSquare className="icon" />
                Entertainment Management – innovative games
              </h3>
              <h3>
                <AiFillCheckSquare className="icon" />
                Deco arrangements
              </h3>
              <h2>
                <AiFillCheckSquare className="icon" />
                Package includes:
              </h2>
              <ul>
                <li>Decoration & Theme Colour</li>
                <li>parking</li>
                <li>Greeting Guests</li>
                <li>Birthday Cake</li>
              </ul>
              <h1>Package starting from 15000rs</h1>
            </div>
          </div>
          <div className="mainContent grid">
            {Data.map(({ id, imgSrc }) => {
              return (
                <div className="birthday">
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

export default Birthday