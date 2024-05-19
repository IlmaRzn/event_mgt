import React from "react";
import "./feedback.css";
import { useState } from "react";
import axios from "axios";
const Feedback = () => {

  const [feedback, setfeedback] = useState({
    feedback: "",
    rating: "",
  });
  const Insert = async (e) => {
    e.preventDefault();
    try {
      const signin = await axios({
        method: "post",
        url: "http://localhost:3000/insert-feedback",
        headers: { Accept: "application/json" },
        data: feedback,
      });

      if (signin?.data?.status === "ok") {
        window.confirm("insert data Successfully");
      }
    } catch (e) {
      alert(e);
    }
  };

  return (
    <section className="feedback">
      <div className="setContainer container">
        <div className="feedbackText">
          <h1 className="title">FEEDBACK</h1>
        </div>
        <form onSubmit={Insert}>
          <div className="feedbackCard grid">
            <div className="feedbackDiv">
              <label htmlFor="feedback"></label>
              <input
                required
                type="text"
                placeholder="Feedback"
                onChange={(e) => {
                  e.preventDefault();
                  setfeedback({ ...feedback, feedback: e.target.value });
                }}
              />
            </div>
            <div className="feedbackDiv">
              <label htmlFor="feedback"></label>
              <input
                required
                type="text"
                placeholder="rating"
                onChange={(e) => {
                  e.preventDefault();
                  setfeedback({ ...feedback, rating: e.target.value });
                }}
              />
            </div>
            <div className="button">
              <button
                className="btn"
                type="submit"
                style={{
                  width: 75,
                  height: 40,
                  alignItems: "center",
                  padding: 0.6,
                  color: "white",
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Feedback;
