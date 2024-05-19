import React,{ useEffect, useState} from 'react';
import './decoration.css';

import axios from "axios";



  const Decorations = () => {
  const [decoration, setDecoration] = useState([]);
  const getList = async () => {
    try {
      const get = await axios({
        method: "get",
        url: "http://localhost:3000/list-decoration",
        headers: { Accept: "application/json" },
      });

      if (get?.data?.status === "ok") {
        setDecoration(get?.data?.data);
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
    <section id="Decoration" className="decoration">
      <div className="decorationContainer container">
        <div className="decorationText">
          <h1 className="title">DECORATION</h1>
          <div className="mainContent grid">
            {decoration?.map((e) => {
              console.log(e, "decoration");
              return (
                <div className="decorationItem" key={e?.id}>
                  <div className="destImage">
                    <img src={e?.picture} alt="Image title" />
                    <div className="overlayInfo">
                      <h2>{e?.name}</h2>
                      <div className="description">{e?.description}</div>
                      <div className="review">{e?.review}</div>
                      <div className="theme">{e?.theme}</div>
                      <div className="price">{e?.price}</div>
                      <div className="type">{e?.type}</div>
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

export default Decorations;