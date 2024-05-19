import React from "react";
import { useState } from "react";
import axios from "axios";
import backgroundImage from "../Assets/w1.png";
const InsertHall = () => {
  
  const [hall, setHall] = useState({
    
    description: "",
    name: "",
    rating: "",
    review: "",
    picture: "",
    contactNo:"",
  });
  const Insert = async (e) => {
    e.preventDefault();
    try {
      const signin = await axios({
        method: "post",
        url: "http://localhost:3000/insert-hall",
        headers: { Accept: "application/json" },
        data: hall,
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
      className="hall"
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
        className="hallContainer container"
        style={{
          padding: "1rem",
        }}
      >
        <div className="hallText">
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
            INSERT HALL
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
            className="hallCard grid"
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
            <div className="hallDiv">
              <label
                htmlFor="hallName"
                style={{
                  display: "block",
                  color: "white",
                  fontWeight: 700,
                  fontSize: "15px",
                  paddingBottom: ".2rem",
                }}
              >
                hall Name
              </label>
              <input
                required
                type="text"
                placeholder="Hall Name"
                onChange={(e) => {
                  e.preventDefault();
                  setHall({ ...hall, name: e.target.value });
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
                  setHall({ ...hall, description: e.target.value });
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
                placeholder="Picture"
                onChange={(e) => {
                  e.preventDefault();
                  setHall({ ...hall, picture: e.target.value });
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
                  setHall({ ...hall, review: e.target.value });
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
                  setHall({ ...hall, rating: e.target.value });
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
                htmlFor="contactNo"
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
                placeholder="ContactNo"
                onChange={(e) => {
                  e.preventDefault();
                  setHall({ ...hall, contactNo: e.target.value });
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

export default InsertHall;
