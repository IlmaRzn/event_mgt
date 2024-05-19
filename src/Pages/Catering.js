import React from "react";
import { NavLink } from "react-router-dom";

import Cateringcomponent from "../Components/Catering/Catering";
const CateringPage = ({ role, jwt }) =>{
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
          to="/insert-catering"
          style={{
            color: "white",
          }}
        >
          Add Catering
        </NavLink>
      )}
      <Cateringcomponent />
    </div>
  );
}
export default CateringPage;