import React, { useEffect, useState } from "react";
import "./photography.css";

import axios from "axios";
 
const Photography = () => {
  const [photography, setPhotography] = useState([]);
  const getList = async () => {
    try {
      const get = await axios({
        method: "get",
        url: "http://localhost:3000/list-photography",
        headers: { Accept: "application/json" },
      });

      if (get?.data?.status === "ok") {
        setPhotography(get?.data?.data);
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
    <section id="Photography" className="photography">
      <div className="photographyContainer container">
        <div className="photographyText">
          <h1 className="title">PHOTOGRAPHY</h1>
          <div className="mainContent grid">
            {photography?.map((e) => {
              console.log(e, "photography");
              return (
                <div className="photographyItem" key={e?.id}>
                  <div className="destImage">
                    <img src={e?.picture} alt="Image title" />
                    
                      <h2>{e?.name}</h2>
                      <div className="description">{e?.description}</div>
                     
                      <div className="type">{e?.type}</div>
                      <div className="price">{e?.price}</div>

                      
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

export default Photography;
