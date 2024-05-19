import React from "react";
import "./user.css";
import { NavLink, useNavigate } from "react-router-dom";
import b8 from "../../Assets/b8.jpg";
import d1 from "../../Assets/d1.jpeg";

import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const User = () => {
     const navigate = useNavigate();
     const [user, setUser] = useState({
       
     });
     const User = async (e) => {
       e.preventDefault();
       try {
         const signin = await axios({
           method: "post",
           url: "http://localhost:3000/user",
           headers: { Accept: "application/json" },
           data: user,
         });

         if (signin?.data?.status === "ok") {
           localStorage.setItem("jwt", signin?.data?.data?.token);
           window.confirm("Loggedin Successfully");
          
         } else {
           throw signin?.data?.message;
         }
       } catch (e) {
         alert(e);
       }
     };
  return (
    <div className="userContainer container">
      <div className="userText">
        <h1 className="title">USER DASHBOARD</h1>
        <div className="cards-container">
          {" "}
          <NavLink className={"card"} to="/booking">
            Booking
          </NavLink>{" "}
          <NavLink className={"card"} to={"/feedback"}>
            Feedback
          </NavLink>{" "}
          
          
          
          
        </div>
      </div>
    </div>
  );
};

export default User;
