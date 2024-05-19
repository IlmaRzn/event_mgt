import React from "react";

import { useState } from "react";
import axios from "axios";
import backgroundImage from "../Assets/g1.jpeg";

const InsertGame = () => {
  const [game, setgame] = useState({
    description: "",
    price: "",
    name: "",
    picture: "",
  });
  const Insert = async (e) => {
    e.preventDefault();
    try {
      const signin = await axios({
        method: "post",
        url: "http://localhost:3000/insert-game",
        headers: { Accept: "application/json" },
        data: game,
      });

      if (signin?.data?.status === "ok") {
        window.confirm("insert data Successfully");
      }
    } catch (e) {
      alert(e);
    }
  };
  return (
    <div
      className="Game"
      style={{
        backgroundImage: `linear-gradient(rgba(33,33,33,0.522)
    ,rgba(33,33,33,0.522)),url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
        position: "relative",
      }}
    >
      <div
        className="gamesContainer container"
        style={{
          padding: "1rem",
        }}
      >
        <div className="gameText">
          <h1
            className="title"
            style={{
              textAlign: "center",
              fontSize: "3rem",
              color: "white",
              lineHeight: "2.5rem",
              fontWeight: "700",
              paddingTop: 1,
            }}
          >
            INSERT GAMES
          </h1>
        </div>
        <form
          onSubmit={Insert}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            fontSize: 20,
            fontWeight: 20,
          }}
        >
          <div
            className="gameCard grid"
            style={{
              alignItems: "center",
              width: "100%",
              borderRadius: "1rem",
              padding: "2rem",
              gap: "1rem",
              justifyContent: "center",
              bottom: "-35",
              transform: "translateY(3%)",
              left: "50%",
              boxShadow: "0 2px 8px 4px rgba(178,178,178,0.45)",
            }}
          >
            <div className="gameDiv">
              <label
                htmlFor="gameName"
                style={{
                  display: "block",
                  color: "white",
                  fontWeight: 700,
                  fontSize: "15px",
                  paddingBottom: ".2rem",
                }}
              >
                Games Name
              </label>
              <input
                required
                type="text"
                placeholder="Name"
                onChange={(e) => {
                  e.preventDefault();
                  setgame({ ...game, name: e.target.value });
                }}
                style={{
                  width: "100%",
                  background: "var(--inputColor)",
                  borderRadius: "10px",
                  border: "none",
                  padding: "5px",
                  fontSize: "13px",
                }}
              />
            </div>
            <div className="gameDiv">
              <label
                htmlFor="description"
                style={{
                  display: "block",
                  color: "white",
                  fontWeight: 700,
                  fontSize: "15px",
                  paddingBottom: ".2rem",
                }}
              >
                Description
              </label>
              <input
                required
                type="text"
                placeholder="description"
                onChange={(e) => {
                  e.preventDefault();
                  setgame({ ...game, description: e.target.value });
                }}
                style={{
                  width: "100%",
                  background: "var(--inputColor)",
                  borderRadius: "10px",
                  border: "none",
                  padding: "5px",
                  fontSize: "13px",
                }}
              />
            </div>
            <div className="gameDiv">
              <label
                htmlFor="Picture"
                style={{
                  display: "block",
                  color: "white",
                  fontWeight: 700,
                  fontSize: "15px",
                  paddingBottom: ".2rem",
                }}
              >
                Picture
              </label>
              <input
                required
                type="text"
                placeholder="picture"
                onChange={(e) => {
                  e.preventDefault();
                  setgame({ ...game, picture: e.target.value });
                }}
                style={{
                  width: "100%",
                  background: "var(--inputColor)",
                  borderRadius: "10px",
                  border: "none",
                  padding: "5px",
                  fontSize: "13px",
                }}
              />
            </div>
            <div className="gameDiv">
              <label
                htmlFor="price"
                style={{
                  display: "block",
                  color: "white",
                  fontWeight: 700,
                  fontSize: "15px",
                  paddingBottom: ".2rem",
                }}
              >
                price
              </label>
              <input
                required
                type="text"
                placeholder="price"
                onChange={(e) => {
                  e.preventDefault();
                  setgame({ ...game, price: e.target.value });
                }}
                style={{
                  width: "100%",
                  background: "var(--inputColor)",
                  borderRadius: "10px",
                  border: "none",
                  padding: "5px",
                  fontSize: "13px",
                }}
              />
            </div>

            <button
              className="btn"
              type="submit"
              style={{
                width: 200,
                height: 50,
                alignItems: "center",
                padding: 0.6,
                color: "white",
              }}
            >
              INSERT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InsertGame;
