import React, { useEffect, useState } from "react";
import "./event.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
const Event = () => {
  const [event, setEvent] = useState([]);
  const getList = async () => {
    try {
      const get = await axios({
        method: "get",
        url: "http://localhost:3000/list-event",
        headers: { Accept: "application/json" },
      });

      if (get?.data?.status === "ok") {
        setEvent(get?.data?.data);
      } else {
        console.log(get);
      }
    } catch (e) {
      alert(e);
    }
  };
  useEffect(() => {
    getList();
  }, []);
  return (
    <section id="Event" className="event">
      <Navbar/>
      <div className="eventContainer container">
        <div className="eventText">
          <h1 className="title">EVENTS</h1>
          <div className="mainContent grid">
            {event?.map((e) => {
              console.log(e, "event");
              return (
                <div className="eventItem" key={e?.id}>
                  <div className="destImage">
                    <img src={e?.picture} alt="Image title" />
                    <div className="overlayInfo">
                      <h2>{e?.name}</h2>
                      <div className="description">{e?.description}</div>
                      <Link to={`/${e?.name.toLowerCase()}`} className="link">
                        <BsFillArrowRightCircleFill className="icon" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Event;
