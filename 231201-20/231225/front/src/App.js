import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MonthDiary from "./pages/MonthDiary";
import DailyDiary from "./pages/DailyDiary";
import Posting from "./pages/Posting";
import ViewPost from "./pages/ViewPost";
import Comment from "./pages/Comment";
import DailyList from "./components/diary/DailyList";
import Login from "./components/home/Login";
import Join from "./components/home/Join";
import CommentInput from "./components/comment/CommentInput";
import CommentList from "./components/comment/CommentList";
import Header from "./components/Header";
import EditPost from "./components/post/EditPost";
import My from "./components/post/My";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/monthDiary/new" element={<MonthDiary />} />
        <Route path="/posting" element={<Posting />} />{" "}
        <Route path="/viewPost/:postId" element={<ViewPost />} />
        <Route
          path="/diary/:monthParam/viewPost/:postId"
          element={<ViewPost />}
        />
        <Route path="/editPost/:updatePostId" element={<EditPost />} />
        <Route path="/dailyList/viewPost/:postId" element={<ViewPost />} />
        <Route
          path="/dailyList/viewPost/:updatePostId"
          element={<ViewPost />}
        />
        <Route path="/diary/:monthParam" element={<DailyDiary />} />
        <Route path="/comment" element={<Comment />} />
        <Route path="/comInput" element={<CommentInput />} />
        <Route path="/comList" element={<CommentList />} />
        <Route path="/header" element={<Header />} />
        <Route path="/my" element={<My />} />
      </Routes>
    </div>
  );
};

export default App;
