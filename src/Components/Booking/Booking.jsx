import React from 'react'
import './booking.css'
import { useState } from "react";
import axios from "axios";
const Booking = () =>{
    const [booking, setbooking] = useState({
      username: "",
      type: "",
      date: "",
      
      decoration: "",
      game: "",
     
      photography: "",
    });
    const Insert = async (e) => {
      e.preventDefault();
      try {
        const signin = await axios({
          method: "post",
          url: "http://localhost:3000/insert-booking",
          headers: { Accept: "application/json" },
          data: booking,
        });

        if (signin?.data?.status === "ok") {
          window.confirm("insert data Successfully");
        }
      } catch (e) {
        alert(e);
      }
    };
    const handleTypeChange = (e) => {
      setbooking({ ...booking, type: e.target.value });
    };
   
    const handleDecorationChange = (e) => {
      setbooking({ ...booking, decoration: e.target.value });
    };

    const handleGameChange = (e) => {
      setbooking({ ...booking, game: e.target.value });
    };

   

    const handlePhotographyChange = (e) => {
      setbooking({ ...booking, photography: e.target.value });
    };
    return (
      <section className="booking">
        <div className="secContainer container">
          <div className="bookingText">
            <h1 className="title">CUSTOMER BOOKING</h1>
          </div>
          <form onSubmit={Insert}>
            <div className="bookingCard grid">
              <div className="bookingDiv">
                <label htmlFor="user Name">User Name</label>
                <input
                  required
                  type="text"
                  placeholder="User Name"
                  onChange={(e) => {
                    e.preventDefault();
                    setbooking({ ...booking, username: e.target.value });
                  }}
                />
              </div>
              <div className="bookingDiv">
                <label htmlFor="date">Date</label>
                <input
                  required
                  type="text"
                  placeholder="Date"
                  onChange={(e) => {
                    e.preventDefault();
                    setbooking({ ...booking, date: e.target.value });
                  }}
                />
              </div>

              <div className="bookingDiv">
                <select
                  id="type"
                  name="event"
                  value={booking.type}
                  onChange={handleTypeChange}
                  required
                >
                  <option value="">Type Of The Event</option>
                  <option value="wedding">wedding</option>
                  <option value="mehandhi">mehandhi</option>
                  <option value="birthday">Birthday</option>
                  <option value="reunion">Reunion</option>
                </select>
              </div>

              <div className="bookingDiv">
                <select
                  id="type"
                  name="decoration"
                  value={booking.decoration}
                  onChange={handleDecorationChange}
                  required
                >
                  <option value="">Theme Color</option>
                  <option value="green">green</option>
                  <option value="blue">blue</option>
                  <option value="pink">pink</option>
                  <option value="red">red</option>
                </select>
              </div>
              <div className="bookingDiv">
                <select
                  id="type"
                  name="photography"
                  value={booking.photography}
                  onChange={handlePhotographyChange}
                  required
                >
                  <option value="">photography</option>
                  <option value="1hr">1hr</option>
                  <option value="2hr">2hr</option>
                  <option value="half day(4hr)">half day(4hr)</option>
                  <option value="full day(8hr or more)">
                    full day(8hr or more)
                  </option>
                </select>
              </div>

              <div className="bookingDiv">
                <select
                  id="type"
                  name="game"
                  value={booking.game}
                  onChange={handleGameChange}
                  required
                >
                  <option value="">game</option>
                  <option value="Wedding Games">Wedding Games</option>
                  <option value="Birthday Games">Birthday Games</option>
                  <option value="Reunion Games">Reunion Games</option>
                  <option value="Mehandhi Games">Mehandhi Games</option>
                </select>
              </div>

              <button
                className="btn"
                type="submit"
                style={{
                  color: "white",
                }}
              >
                Book
              </button>
            </div>
          </form>
        </div>
      </section>
    );
};

export default Booking;