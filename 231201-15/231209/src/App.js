import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import MonthDiary from "./pages/MonthDiary";
import DailyDiary from "./pages/DailyDiary";
import Posting from "./pages/Posting";
import ViewPost from "./pages/ViewPost";
import Comment from "./pages/Comment";
import MonthList from "./components/months/MonthList";

const App = () => {
  return (
    <div>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MonthDiary/*" element={<MonthDiary />} />
        <Route path="/diary/:monthParam" element={<MonthList />} />
        <Route path="/DailyDiary" element={<DailyDiary />} />
        <Route path="/Posting" element={<Posting />} />
        <Route path="/ViewPost" element={<ViewPost />} />
        <Route path="/Comment" element={<Comment />} />
      </Routes>
    </div>
  );
};

export default App;
