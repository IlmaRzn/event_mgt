import React, { useEffect, useState } from "react";
import "./games.css";

import axios from "axios";

const Games = () => {
  const [game, setGame] = useState([]);
  const getList = async () => {
    try {
      const get = await axios({
        method: "get",
        url: "http://localhost:3000/list-game",
        headers: { Accept: "application/json" },
      });

      if (get?.data?.status === "ok") {
        setGame(get?.data?.data);
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
    <section id="Game" className="game">
      <div className="gameContainer container">
        <div className="gameText">
          <h1 className="title">GAMES</h1>
          <div className="mainContent grid">
            {game?.map((e) => {
              console.log(e, "game");
              return (
                <div className="gameItem" key={e?.id}>
                  <div className="destImage">
                    <img src={e?.picture} alt="Image title" />

                    <h2>{e?.name}</h2>
                    <div className="name">{e?.name}</div>
                    <div className="description">{e?.description}</div>
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

export default Games;
