import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Message from "./pages/Message";
import Login from "./pages/Login";
import Register from "./pages/Register";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/message" element={<Message />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
