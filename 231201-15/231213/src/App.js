import React from "react";
import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import MonthDiary from "./pages/MonthDiary";
import DailyDiary from "./pages/DailyDiary";
import Posting from "./pages/Posting";
import ViewPost from "./pages/ViewPost";
import Comment from "./pages/Comment";
import DailyList from "./components/diary/DailyList";
import MonthList from "./components/months/MonthList";
import Loading from "./pages/Loading";
import Login from "./components/home/Login";
import Join from "./components/home/Join";

const App = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setLoading(false);
  //     if (window.location.pathname === "/") {
  //       navigate("/");
  //     }
  //   }, 1000);

  //   return () => clearTimeout(timeout);
  // }, [navigate]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/MonthDiary/*" element={<MonthDiary />} />
        <Route path="/posting" element={<Posting />} />{" "}
        <Route path="/viewPost/:postId" element={<ViewPost />} />
        <Route path="/dailyList/viewPost/:postId" element={<ViewPost />} />
        <Route path="/dailyList" element={<DailyList />} />{" "}
        <Route path="/diary/:monthParam" element={<MonthList />} />
        <Route path="/DailyDiary" element={<DailyDiary />} />
        <Route path="/Comment" element={<Comment />} />
      </Routes>
    </div>
  );
};

export default App;
