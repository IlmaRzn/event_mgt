import React, { useState } from "react";
import "./navbar.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  //code to show navbar on toggle
  const [active, setActive] = useState("navBar");
  const showNav = () => {
    setActive("navBar activeNavbar ");
  };
  //code to close navbar
  const removeNav = () => {
    setActive("navBar ");
  };
  return (
    <section className="navBarSection">
      <div className="header">
        <div className="logoDiv">
          <a href="#" className="logo">
            <h1 className="flex">
              <BsFillMoonStarsFill className="icon" /> DreamPlanner
            </h1>
          </a>{" "}
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <NavLink to={"/home"} className="navLink">
                Home
              </NavLink>
            </li>

            <li className="navItem">
              <NavLink to={"/about"} className="navLink">
                About
              </NavLink>
            </li>

            <li className="navItem">
              <NavLink to={"/event"} className="navLink">
                Event
              </NavLink>
            </li>

            <li className="navItem">
              <NavLink to={"/service"} className="navLink">
                Service
              </NavLink>
            </li>

            <div className="headerBtns flex">
              <NavLink
                to={"/login"}
                className="btn loginBtn"
                style={{
                  width: 100,
                  height: 50,
                  alignItems: "center",
                  textAlign:"center",
                  margin:"center",
                  padding: 0.6,
                  color: "white",
                }}
              >
                Login
              </NavLink>
            </div>
          </ul>

          <div onClick={removeNav} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>
        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
