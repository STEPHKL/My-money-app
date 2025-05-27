import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accounts from "./pages/Accounts";
import Home from "./pages/Home";
import Create_account from "./pages/Create_account.js";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Registers from "./pages/Registers";
import Sign_up from "./pages/Sign_up.js";
import New_registration from "./pages/New_registration";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import fakeRecords from "./data/fakeData"; // ajustá ruta si lo importás desde otra carpeta



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sign_up />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Create_account" element={<Create_account />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/registers" element={<Registers />} />
        <Route path="/Sign_up" element={<Sign_up />} />
        <Route path="/new_registration" element={<New_registration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
