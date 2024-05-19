import React from "react";

import { useState } from "react";
import axios from "axios";
import backgroundImage from "../Assets/people.jpg";
import photographys from "./Photography";
const InsertPhoto = () => {
   const [Photography, setphotography] = useState({
     description: "",
     price: "",
     type: "",
     picture: "",
     name:"",
   });
   const Insert = async (e) => {
     e.preventDefault();
     try {
       const signin = await axios({
         method: "post",
         url: "http://localhost:3000/insert-photography",
         headers: { Accept: "application/json" },
         data: Photography,
       });

       if (signin?.data?.status === "ok") {
         window.confirm("insert data Successfully");
       }
     } catch (e) {
       alert(e);
     }
   };
   const handleTypeChange = (e) => {
     setphotography({ ...Photography, type: e.target.value });
   };
  return (
    <section
      className="photo"
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
        className="photoContainer container"
        style={{
          padding: "1rem",
        }}
      >
        <div className="photoText">
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
            INSERT PHOTOGRAPHY
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
            className="photoCard grid"
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
            <div className="photoDiv">
              <label
                htmlFor="photoName"
                style={{
                  display: "block",
                  color: "white",
                  fontWeight: 700,
                  fontSize: "15px",
                  paddingBottom: ".2rem",
                }}
              >
                Photography Name
              </label>
              <input
                required
                type="text"
                placeholder="Photography Name"
                onChange={(e) => {
                  e.preventDefault();
                  setphotography({ ...Photography, name: e.target.value });
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
            <div className="photoDiv">
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
                  setphotography({
                    ...Photography,
                    description: e.target.value,
                  });
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
            <div className="photoDiv">
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
                  setphotography({ ...Photography, picture: e.target.value });
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
            <div className="photoDiv">
              <select
                id="type"
                name="type"
                value={Photography.type}
                onChange={handleTypeChange}
                required
              >
                <option value="">Type</option>
                <option value="yes">Birthday</option>
                <option value="no">Reuion</option>
                <option value="no">Mehandhi</option>
                <option value="no">Wedding</option>
              </select>
            </div>
            <div className="photoDiv">
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
                Price
              </label>
              <input
                required
                type="text"
                placeholder="Price"
                onChange={(e) => {
                  e.preventDefault();
                  setphotography({ ...Photography, price: e.target.value });
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

export default InsertPhoto;
