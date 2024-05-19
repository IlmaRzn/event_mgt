import React from "react";
import Hall from "../Components/Hall/Hall";
import { NavLink } from "react-router-dom";

const Halls = ({ role, jwt }) => {
  console.log("jwt", jwt);
  return (
    <div
      style={{
        backgroundColor: "black",
        fontSize: 20,
      }}
    >
      {role === "admin" && (
        <NavLink
          to="/insert-hall"
          style={{
            color: "white",
          }}
        >
          Add Hall
        </NavLink>
      )}
      <Hall page={"admin"} />
    </div>
  );
};

export default Halls;
