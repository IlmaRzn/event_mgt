import React from "react";

import { useState } from "react";
import axios from "axios";
import backgroundImage from "../Assets/d1.jpeg";


const InsertDecoration = () => {
  const [decoration, setDecoration] = useState({
    
    description: "",
    theme: "",
    price: "",
    type: "",
    picture: "",
  });
  const Insert = async (e) => {
    e.preventDefault();
    try {
      const signin = await axios({
        method: "post",
        url: "http://localhost:3000/insert-decoration",
        headers: { Accept: "application/json" },
        data: decoration,
      });

      if (signin?.data?.status === "ok") {
        window.confirm("insert data Successfully");
      }
    } catch (e) {
      alert(e);
    }
  };
    const handleTypeChange = (e) => {
      setDecoration({ ...decoration, type: e.target.value });
    };
  return (
    <section
      className="deco"
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
        className="decoContainer container"
        style={{
          padding: "1rem",
        }}
      >
        <div className="decoText">
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
            INSERT DECORATION
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
            className="decoCard grid"
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
            <div className="decoDiv">
              <select
                id="type"
                name="type"
                value={decoration.type}
                onChange={handleTypeChange}
                required
                
                style={{
                  display: "block",
                  color: "black",
                  fontWeight: 700,
                  fontSize: "15px",
                  paddingBottom: ".2rem",
                }}
              >
                <option value="">Event Type</option>
                <option value="wedding">wedding</option>
                <option value="mehandhi">mehandhi</option>
                <option value="birthday">Birthday</option>
                <option value="reunion">Reunion</option>
              </select>
            </div>
            <div className="decoDiv">
              <label
                htmlFor="Description"
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
                placeholder="Description"
                onChange={(e) => {
                  e.preventDefault();
                  setDecoration({ ...decoration, description: e.target.value });
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
            <div className="decoDiv">
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
                  setDecoration({ ...decoration, picture: e.target.value });
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
            <div className="decoDiv">
              <label
                htmlFor="review"
                style={{
                  display: "block",
                  color: "white",
                  fontWeight: 700,
                  fontSize: "15px",
                  paddingBottom: ".2rem",
                }}
              >
                Review
              </label>
              <input
                required
                type="text"
                placeholder="Review"
                onChange={(e) => {
                  e.preventDefault();
                  setDecoration({ ...decoration, review: e.target.value });
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
            <div className="decoDiv">
              <label
                htmlFor="theme"
                style={{
                  display: "block",
                  color: "white",
                  fontWeight: 700,
                  fontSize: "15px",
                  paddingBottom: ".2rem",
                }}
              >
                theme
              </label>
              <input
                required
                type="text"
                placeholder="theme"
                onChange={(e) => {
                  e.preventDefault();
                  setDecoration({ ...decoration, theme: e.target.value });
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
            <div className="decoDiv">
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
                  setDecoration({ ...decoration, price: e.target.value });
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
              type="submit"
              className="btn"
              style={{
                width: "100%",
                background: "midnightblue",

                borderRadius: "10px",
                border: "none",
                padding: "5px",
                fontSize: "13px",
                color: "white",
              }}
            >
              INSERT
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default InsertDecoration;
