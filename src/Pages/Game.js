import React from "react";
import { NavLink } from "react-router-dom";
import Game from "../Components/Games/Games";
const Games = ({ role, jwt }) => {
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
          to="/insert-game"
          style={{
            color: "white",
          }}
        >
          Add More
        </NavLink>
      )}
      <Game page={"admin"} />
    </div>
  );
};
export default Games;
