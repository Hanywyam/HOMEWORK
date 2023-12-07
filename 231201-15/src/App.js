import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import MonthDiary from "./pages/MonthDiary";

const App = () => {
  return (
    <div>
      <button>
        <Link to="/">home</Link>
      </button>
      <button>
        <Link to="/monthDiary">monthDiary</Link>
      </button>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/monthDiary" element={<MonthDiary />} />
      </Routes>
    </div>
  );
};

export default App;
