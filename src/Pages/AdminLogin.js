import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import background  from "../Assets/planner.jpg";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const login = async (e) => {
    e.preventDefault();
    try {
      const signin = await axios({
        method: "post",
        url: "http://localhost:3000/admin-login",
        headers: { Accept: "application/json" },
        data: user,
      });

      if (signin?.data?.status === "ok") {
        localStorage.setItem("jwt", signin?.data?.data?.token);
        localStorage.setItem("role", signin?.data?.data?.role);
        window.confirm("Loggedin Successfully");
        navigate("/admin");
      } else {
        throw signin?.data?.message;
      }
    } catch (e) {
      alert(e);
    }
  };
  return (
    <section
      className="login"
      style={{
        backgroundImage: `linear-gradient(rgba(33,33,33,0.522)
    ,rgba(33,33,33,0.522)),url(${background})`,
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
        className="secContainer container"
        style={{
          padding: "1rem",
        }}
      >
        <div className="loginText">
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
            ADMIN LOGIN
          </h1>
        </div>
        <form
          onSubmit={login}
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
            className="loginCard grid"
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
            <div className="loginDiv">
              <label
                htmlFor="User Name"
                style={{
                  display: "block",
                  color: "black",
                  fontWeight: 500,
                  fontSize: "15px",
                  paddingBottom: ".2rem",
                }}
              >
                User Name
              </label>
              <input
                required
                type="text"
                placeholder="User Name"
                onChange={(e) => {
                  e.preventDefault();
                  setUser({ ...user, username: e.target.value });
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

            <div className="loginDiv">
              <label
                htmlFor="Password"
                style={{
                  display: "block",
                  color: "black",
                  fontWeight: 500,
                  fontSize: "15px",
                  paddingBottom: ".2rem",
                }}
              >
                Password
              </label>
              <input
                required
                type="password"
                placeholder="password"
                onChange={(e) => {
                  e.preventDefault();
                  setUser({ ...user, password: e.target.value });
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
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AdminLogin;
