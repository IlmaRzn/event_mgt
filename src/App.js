import React, { useEffect, useState } from "react";
import "./app.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Events from "./Pages/Events";
import AdminLogin from "./Pages/AdminLogin";
import Loginpage from "./Pages/Login";
import CreateAccounts from "./Pages/CreateAccount";
import LoginAccounts from "./Pages/Login";
import BookEvent from "./Pages/Booking";
import HomePage from "./Pages/HomePage";
import InsertEvent from "./Pages/InsertEvent";
import InsertDecoration from "./Pages/InsertDecoration";
import InsertGames from "./Pages/InsertGames";
import InsertHall from "./Pages/InsertHall";
import InsertPhoto from "./Pages/InsertPhotography";
import InsertCatering from "./Pages/InsertCatering";
import Booking from "./Pages/Booking";
import ListDecoration from "./Pages/Decoration";
import ListGame from "./Pages/Game";
import ListHall from "./Pages/Hall";
import Listphotography from "./Pages/Photography";
import AdminDashboard from "./Pages/AdminDashboard";
import ListCatering from "./Pages/Catering";

import Feedback from "./Components/Feedback/Feedback";
import Login from "./Components/Login/Login";
import User from "./Components/User/User";
import Wedding from "./Components/Wedding/Wedding";
import Cateringcomponent from "./Components/Catering/Catering";
import Decorations from "./Components/Decoration/Decoration";
import Games from "./Components/Games/Games";
import Halls from "./Components/Hall/Hall";
import Photography from "./Components/Photography/Photography";
import Service from "./Components/Service/Service";
import Event from "./Components/Event/Event";
import About from "./Components/About/About";
import Gallery from "./Components/Gallery/Gallery";
import Mehandhi from "./Components/Mehandhi/Mehandhi";
import Birthday from "./Components/Birthday/Birthday";
import Reunion from "./Components/Reunion/Reunion";
import Navbar from "./Components/Navbar/Navbar";


const App = () => {
  const role = localStorage.getItem("role");
  const jwt = localStorage.getItem("jwt");
  return (
    <>
      <Router>
        <Routes>
          <Route path="/admin-login" Component={() => AdminLogin()} />
          <Route path="/login" Component={() => Loginpage()} />
          <Route path="/create-account" Component={() => CreateAccounts()} />
          <Route path="/login-account" Component={() => LoginAccounts()} />
          <Route path="/book-event" Component={() => BookEvent()} />
          <Route path="/create-event" Component={() => InsertEvent()} />
          <Route path="/service" Component={() => Service()} />
          <Route path="/event" Component={() => Event()} />
          <Route path="/about" Component={() => About()} />
          <Route path="/gallery" Component={() => Gallery()} />
          <Route path="/feedback" Component={() => Feedback()} />
          <Route path="/wedding" Component={() => Wedding()} />
          <Route path="/mehandhi" Component={() => Mehandhi()} />
          <Route path="/birthday" Component={() => Birthday()} />
          <Route path="/reunion" Component={() => Reunion()} />
          <Route path="/booking" Component={() => Booking()} />
          <Route path="/events" Component={() => Events({ role, jwt })} />
          <Route
            path="/caterings"
            Component={() => Cateringcomponent({ role, jwt })}
          />
          <Route
            path="/decorations"
            Component={() => Decorations({ role, jwt })}
          />
          <Route path="/games" Component={() => Games({ role, jwt })} />
          <Route path="/halls" Component={() => Halls({ role, jwt })} />
          <Route
            path="/photographys"
            Component={() => Photography({ role, jwt })}
          />

          <Route
            path="/insert-decoration"
            Component={() => InsertDecoration()}
          />
          <Route path="/user" Component={() => User()} />
          <Route path="/insert-game" Component={() => InsertGames()} />
          <Route path="/insert-hall" Component={() => InsertHall()} />
          <Route path="/insert-photography" Component={() => InsertPhoto()} />
          <Route path="/insert-catering" Component={() => InsertCatering()} />
          <Route path="/insert-booking" Component={() => Booking()} />
          <Route path="/insert-feedback" Component={() => Feedback()} />

          <Route path="/admin" Component={() => AdminDashboard()} />
          <Route
            path="/catering"
            Component={() => ListCatering({ role, jwt })}
          />
          <Route
            path="/decoration"
            Component={() => ListDecoration({ role, jwt })}
          />
          <Route path="/game" Component={() => ListGame({ role, jwt })} />
          <Route path="/hall" Component={() => ListHall({ role, jwt })} />
          <Route
            path="/photography"
            Component={() => Listphotography({ role, jwt })}
          />
          
          <Route path="/login" Component={() => Login()} />
          <Route path="/wedding" Component={() => Wedding} />
          <Route path="/" Component={() => HomePage()} />
         
        </Routes>
      </Router>
    </>
  );
};

export default App;
