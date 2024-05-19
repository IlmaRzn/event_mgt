import React from "react";

import { useState } from "react";
import axios from "axios";
import backgroundImage from "../Assets/F3.jpg";
const InsertCatering = () => {
    const [catering, setcatering] = useState({
      description: "",
      name: "",
      review: "",
      rating: "",
      picture: "",
      contactNo:"",
    });
    const Insert = async (e) => {
      e.preventDefault();
      try {
        const signin = await axios({
          method: "post",
          url: "http://localhost:3000/insert-catering",
          headers: { Accept: "application/json" },
          data: catering,
        });

        if (signin?.data?.status === "ok") {
          window.confirm("insert data Successfully");
        }
      } catch (e) {
        alert(e);
      }
    };
  return (
    <section
      className="catering"
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
        className="catContainer container"
        style={{
          padding: "1rem",
        }}
      >
        <div className="caText">
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
            INSERT CATERING
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
            className="caCard grid"
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
            <div className="cateringDiv">
              <label
                htmlFor="name"
                style={{
                  display: "block",
                  color: "white",
                  fontWeight: 700,
                  fontSize: "15px",
                  paddingBottom: ".2rem",
                }}
              >
                Catering Name
              </label>
              <input
                required
                type="text"
                placeholder="Name"
                onChange={(e) => {
                  e.preventDefault();
                  setcatering({ ...catering, name: e.target.value });
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
            <div className="cateringDiv">
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
                placeholder="Description"
                onChange={(e) => {
                  e.preventDefault();
                  setcatering({ ...catering, description: e.target.value });
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
            <div className="cateringDiv">
              <label
                htmlFor="picture"
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
                placeholder="Picture"
                onChange={(e) => {
                  e.preventDefault();
                  setcatering({ ...catering, picture: e.target.value });
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
            <div className="hallDiv">
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
                  setcatering({ ...catering, review: e.target.value });
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
            <div className="hallDiv">
              <label
                htmlFor="rating"
                style={{
                  display: "block",
                  color: "white",
                  fontWeight: 700,
                  fontSize: "15px",
                  paddingBottom: ".2rem",
                }}
              >
                Rating
              </label>
              <input
                required
                type="text"
                placeholder="Rating"
                onChange={(e) => {
                  e.preventDefault();
                  setcatering({ ...catering, rating: e.target.value });
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
            <div className="hallDiv">
              <label
                htmlFor="rating"
                style={{
                  display: "block",
                  color: "white",
                  fontWeight: 700,
                  fontSize: "15px",
                  paddingBottom: ".2rem",
                }}
              >
               contactNo
              </label>
              <input
                required
                type="text"
                placeholder="Contact No"
                onChange={(e) => {
                  e.preventDefault();
                  setcatering({ ...catering, contactNo: e.target.value });
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
    </section>
  );
};

export default InsertCatering;
