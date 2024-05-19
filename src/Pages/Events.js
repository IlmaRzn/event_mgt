import React from "react";
import Event from "../Components/Event/Event";
import { NavLink } from "react-router-dom";


const Events = ({ role, jwt }) => {
  console.log("jwt", jwt);
  return (
    <div
      style={{
        backgroundColor:"black",
        fontSize:20,
        
      }}
    >
      {role === "admin" && <NavLink to="/create-event" 
      style={{
        color:"white",
      }}>
        Add Event</NavLink>}
      <Event />
    </div>
  );
};

export default Events;
