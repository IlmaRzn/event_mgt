import React from "react";
import "./admin.css";
import { NavLink, useNavigate } from "react-router-dom";
const Admin = () => {
  const navigate = useNavigate();
  
 

  return (
    <div className="Container">
      <h2>ADMIN DASHBOARD</h2>

      <div className="cards-container">
        {" "}
        <NavLink className={"card"} to="/events">
          EVENTS
        </NavLink>{" "}
        <NavLink className={"card"} to={"/catering"}>
          CATERING
        </NavLink>{" "}
        <NavLink className={"card"} to={"/decoration"}>
          DECORATION
        </NavLink>{" "}
        <NavLink className={"card"} to={"/game"}>
          {" "}
          GAMES
        </NavLink>{" "}
        <NavLink className={"card"} to={"/hall"}>
          {" "}
          HALL
        </NavLink>{" "}
        <NavLink className={"card"} to={"/photography"}>
          {" "}
          PHOTOGRAPHY
        </NavLink>{" "}
        
      </div>
      <div className="Logout">
        {" "}
        <NavLink to="/login-account">Log Out</NavLink>{" "}
      </div>
    </div>
  );
};

export default Admin;
