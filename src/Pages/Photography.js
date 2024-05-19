import React from "react";
import { NavLink } from "react-router-dom";
import Photography from "../Components/Photography/Photography";
const photographys = ({ role, jwt }) => {
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
          to="/insert-photography"
          style={{
            color: "white",
          }}
        >
          Add More
        </NavLink>
      )}
      <Photography page={"admin"} />
    </div>
  );
};
export default photographys;
