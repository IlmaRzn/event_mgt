
import React, { useEffect, useState } from "react";
import "./hall.css";

import axios from "axios";

const Halls = () => {
  const [hall, setHall] = useState([]);
  const getList = async () => {
    try {
      const get = await axios({
        method: "get",
        url: "http://localhost:3000/list-hall",
        headers: { Accept: "application/json" },
      });

      if (get?.data?.status === "ok") {
        setHall(get?.data?.data);
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
    <section id="Hall" className="hall">
      <div className="hallContainer container">
        <div className="hallText">
          <h1 className="title">HALLS</h1>
          <div className="mainContent grid">
            {hall?.map((e) => {
              console.log(e, "hall");
              return (
                <div className="hallItem" key={e?.id}>
                  <div className="destImage">
                    <img src={e?.picture} alt="Image title" />

                    <h2>{e?.name}</h2>
                    <div className="description">{e?.description}</div>
                    <div className="name">{e?.name}</div>
                    <div className="contactNo">{e?.contactNo}</div>
                    <div className="rating">{e?.rating}</div>
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

export default Halls;

