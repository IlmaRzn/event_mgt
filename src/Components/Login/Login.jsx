import React from "react";
import "./login.css";
import { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
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
        url: "http://localhost:3000/login",
        headers: { Accept: "application/json" },
        data: user,
      });

      if (signin?.data?.status === "ok") {
        localStorage.setItem("jwt", signin?.data?.data?.token);
        localStorage.setItem("role", "user");

        window.confirm("Loggedin Successfully");
        navigate("/user");
      } else {
        throw signin?.data?.message;
      }
    } catch (e) {
      alert(e);
    }
  };
  return (
    <div className="login-page">
      {" "}
      <li>
        <div className="admin-log-btn">
          <NavLink className={"nav"} to={"/admin-login"}>
            LOG AS ADMIN
          </NavLink>
        </div>
        <div
          className="create-account">
          <NavLink className={"nav"} to={"/create-account"}>
            CREATE ACCOUNT
          </NavLink>
        </div>
      </li>
      <section className="login">
        <div className="secContainer container">
          <div className="loginText">
            <h1 className="title">USER LOGIN</h1>
          </div>
          <form onSubmit={login}>
            <div className="loginCard grid">
              <div className="loginDiv">
                <label htmlFor="User Name">User Name</label>
                <input
                  required
                  type="text"
                  placeholder="User Name"
                  onChange={(e) => {
                    e.preventDefault();
                    setUser({ ...user, username: e.target.value });
                  }}
                />
              </div>

              <div className="loginDiv">
                <label htmlFor="Password">Password</label>
                <input
                  required
                  type="password"
                  placeholder="password"
                  onChange={(e) => {
                    e.preventDefault();
                    setUser({ ...user, password: e.target.value });
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn"
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
    </div>
  );
};

export default Login;
