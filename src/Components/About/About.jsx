import React from "react";
import "./about.css";
import img from "../../Assets/people.jpg";
import imge from "../../Assets/batch1.jpg";
import { AiFillCheckSquare } from "react-icons/ai";
import Navbar from "../Navbar/Navbar";

const About = () => {
  return (
   
      <section id="About" className="about section container">
        <Navbar/>
        <div className="setContainer">
          <div className="destImage">
            <div class="row">
              <div class="column">
                <div class="center">
                  <h1 className="secTitle">ABOUT US</h1>
                </div>
                <p>
                  <h3>GET TO KNOW US</h3>
                  Your Perfect Event Begins With Us
                </p>
              </div>
              <div class="column">
                <img src={imge} alt="batch" class="center" />
              </div>
            </div>
            <div class="row">
              <div class="column">
                <img src={img} alt="bday" class="center" />
              </div>
              <div class="column">
                <p>
                  <h3>Company Started</h3>
                  2022
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="details">
          <h1 className="secTitle">Why Choose Us</h1>
          <h4>
            We are committed to provide our customers with an exceptional
            service while offering our employees the best training.
          </h4>
          <p>
            <AiFillCheckSquare className="icon" />
            Smooth flow of the event assured by undertaking a proactive approach
            integrated with the strategic management tools such as scenario
            planning.
          </p>
          <p>
            <AiFillCheckSquare className="icon" />
            Undergo a trend in raising the bar higher for professional and
            satisfactory service standards
          </p>
          <p>
            <AiFillCheckSquare className="icon" />
            One stop shop for Premier quality event coordination added with a
            touch of stardom
          </p>
          <p>
            <AiFillCheckSquare className="icon" />
            Benefit from our industrial connections and network of professional
            vendors in obtaining high standard products at an affordable price
            range
          </p>
        </div>
      </section>
    
  );
};

export default About;
