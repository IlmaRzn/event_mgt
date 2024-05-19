import React from "react";
import { NavLink } from "react-router-dom";
import Decoration from "../Components/Decoration/Decoration";
const Decorations = ({ role, jwt }) => {
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
          to="/insert-decoration"
          style={{
            color: "white",
          }}
        >
          Add More
        </NavLink>
      )}
      <Decoration page={"admin"} />
    </div>
  );
};
export default Decorations;
