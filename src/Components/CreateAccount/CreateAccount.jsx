import React, { useEffect } from "react";
import "./createAccount.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

var provinceDistricts = require("srilankan-provinces-districts");

const CreateAccount = () => {
  const navigate = useNavigate();
  const [districts, setDistricts] = useState([]);
  const [user, setUser] = useState({
    name: "",
    NIC: "",
    email: "",
    phone_No: "",
    username: "",
    password: "",
    district: "",
    province: "Eastern",
  });
  const provinces = provinceDistricts.getProvinces() || [];

  useEffect(() => {
    const districts1 = provinceDistricts.getDistricts(user?.province);
    setDistricts(districts1);
  }, [user?.province]);

  const signup = async (e) => {
    e.preventDefault();

    try {
      const accountCreation = await axios({
        method: "post",
        url: "http://localhost:3000/create-account",
        headers: { Accept: "application/json" },
        data: user,
      });

      if (accountCreation?.data?.status === "ok") {
        localStorage.setItem("jwt", accountCreation?.data?.data?.token);
        window.confirm("Account Created Successfully");
         navigate("/login");
      } else {
        throw accountCreation?.data?.message;
      }
    } catch (e) {
      alert(e);
    }
  };
  return (
    <section className="book">
      <div className="secContainer container">
        <div className="bookText">
          <h1 className="title">CREATE ACCOUNT</h1>
        </div>
        <form onSubmit={signup} className="bookCard grid">
          <div className="bookingDiv">
            <label htmlFor="FullName">Full Name</label>
            <input
              required
              type="text"
              placeholder="Full Name"
              onChange={(e) => {
                e.preventDefault();
                setUser({ ...user, name: e.target.value });
              }}
            />
          </div>

          <div className="bookingDiv">
            <label htmlFor="Email">Email</label>
            <input
              required
              type="email"
              placeholder="Email"
              onChange={(e) => {
                e.preventDefault();
                setUser({ ...user, email: e.target.value });
              }}
            />
          </div>

          <div className="bookingDiv">
            <label htmlFor="NIC">NIC</label>
            <input
              required
              type="text"
              placeholder="NIC"
              onChange={(e) => {
                e.preventDefault();
                setUser({ ...user, NIC: e.target.value });
              }}
            />
          </div>

          <div className="bookingDiv">
            <label htmlFor="Address">Address</label>
            <select
              required
              value={user?.province}
              onChange={(e) => {
                e.preventDefault();
                setUser({ ...user, province: e.target.value });
              }}
            >
              <option>Select your province</option>
              {provinces?.map((province) => (
                <option>{province}</option>
              ))}
            </select>
            <select
              required
              onChange={(e) => {
                e.preventDefault();
                setUser({ ...user, district: e.target.value });
              }}
            >
              <option>Select your District</option>
              {districts?.map((district) => (
                <option>{district}</option>
              ))}
            </select>{" "}
          </div>

          <div className="bookingDiv">
            <label htmlFor="Contact No">Contact No</label>
            <input
              required
              type="tel"
              placeholder="Contact No"
              onChange={(e) => {
                e.preventDefault();
                setUser({ ...user, phone_No: e.target.value });
              }}
            />
          </div>

          <div className="bookingDiv">
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

          <div className="bookingDiv">
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
        </form>
      </div>
    </section>
  );
};

export default CreateAccount;
