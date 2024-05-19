import React from "react";

import { useState } from "react";
import axios from "axios";
import backgroundImage from "../Assets/btb6.jpg";
const InsertEvent = () => {
  const [event, setevent] = useState({
    description: "",
    name: "",
    picture: "",
  });
  const Insert = async (e) => {
    e.preventDefault();
    console.log("event insertion");
    try {
      const signin = await axios({
        method: "post",
        url: "http://localhost:3000/insert-event",
        headers: { Accept: "application/json" },
        data: event,
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
      className="Event"
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
        className="evContainer container"
        style={{
          padding: "1rem",
        }}
      >
        <div className="evText">
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
            CREATE EVENT
          </h1>
        </div>
      
        <form
          onSubmit={Insert}
          className="evCard grid"
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
          <div className="eventDiv">
            <label
              htmlFor="eventName"
              style={{
                display: "block",
                color: "white",
                fontWeight: 700,
                fontSize: "15px",
                paddingBottom: ".2rem",
              }}
            >
              Event Name
            </label>
            <input
              required
              type="text"
              placeholder="Name"
              onChange={(e) => {
                e.preventDefault();
                setevent({ ...event, name: e.target.value });
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
          <div className="eventDiv">
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
                setevent({ ...event, description: e.target.value });
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
          <div className="eventDiv">
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
                setevent({ ...event, picture: e.target.value });
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
        </form>
       
      </div>
    </section>
  );
};

export default InsertEvent;
