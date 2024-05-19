import React, { useState, useEffect } from "react";
import "./catering.css";
import axios from "axios";


const Cateringcomponent = () => {
  const [catering, setCatering] = useState([]);
  const getList = async () => {
    try {
      const get = await axios({
        method: "get",
        url: "http://localhost:3000/list-catering",
        headers: { Accept: "application/json" },
      });

      if (get?.data?.status === "ok") {
        setCatering(get?.data?.data);
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
    <section id="Catering" className="catering">
      <div className="cateringContainer container">
        <div className="cateringText">
          <h1 className="title">
            CATERING
          </h1>
          <div className="mainContent grid">
            {
              catering?.map((e) =>{
                console.log(e, "catering");
                return (
                  <div className="cateringItem" key={e?.id}>
                    <div className="destImage">
                      <img src={e?.picture} alt="Image title" />

                      <h2>{e?.name}</h2>
                      <div className="description">{e?.description}</div>
                      <div className="contactNo">{e?.contactNo}</div>
                      <div className="rating">{e?.rating}</div>
                      <div className="review">{e?.review}</div>
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Cateringcomponent;
