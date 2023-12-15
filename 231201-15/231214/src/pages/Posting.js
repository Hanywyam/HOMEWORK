import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { addPost } from "../store/modules/postStore";
import Feeling from "../components/diary/Feeling";
import PostingBtn from "../components/post/PostingBtn";
import Header from "../components/Header";
import { useNavigate, Routes, Route } from "react-router-dom";
import ViewPost from "./ViewPost";
import postingStyle from "../components/post/posting.module.css";

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
    <section className={postingStyle.posting}>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div className={postingStyle.postingWrapper}>
              <div>
                <input
                  type="date"
                  name="date"
                  value={newPost.date}
                  onChange={handleInputChange}
                  className={postingStyle.postingDate}
                />
                <Feeling />
              </div>

              <input
                type="text"
                name="title"
                value={newPost.title}
                onChange={handleInputChange}
                className={postingStyle.postingText}
              />
              <textarea
                name="content"
                value={newPost.content}
                onChange={handleInputChange}
                className={postingStyle.postingTextarea}
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
