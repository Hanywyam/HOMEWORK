import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { addPost } from "../store/modules/postStore";
import Feeling from "../components/diary/Feeling";
import PostingBtn from "../components/post/PostingBtn";
import { useNavigate, Routes, Route } from "react-router-dom";
import ViewPost from "./ViewPost";

const Posting = () => {
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.post.postList);
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    date: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prevPost) => ({ ...prevPost, [name]: value }));
  };

  // 일기 추가
  const handleAddPost = () => {
    if (newPost.title && newPost.content && newPost.date) {
      dispatch(addPost(newPost));
      setNewPost({ title: "", content: "", date: "" });

      const newIndex = postList.length;
      navigate(`/viewPost/${newIndex}`);
    }
  };

  return (
    <section>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <input
                type="date"
                name="date"
                value={newPost.date}
                onChange={handleInputChange}
              />
              <Feeling />
              <input
                type="text"
                name="title"
                value={newPost.title}
                onChange={handleInputChange}
              />
              <textarea
                name="content"
                value={newPost.content}
                onChange={handleInputChange}
              />
              <PostingBtn handleAddPost={handleAddPost} />
            </div>
          }
        />
        <Route path="viewPost/:postId" element={<ViewPost />} />
      </Routes>
    </section>
  );
};

export default connect()(Posting);
