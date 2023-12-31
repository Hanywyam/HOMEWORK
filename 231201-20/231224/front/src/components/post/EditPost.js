import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import { updatePost } from "../../store/modules/postStore";
import Header from "../Header";
import editStyle from "./editPost.module.css";

const EditPost = () => {
  const dispatch = useDispatch();
  const { postId, updatePostId } = useParams();
  const postList = useSelector((state) => state.post.postList);
  const selectedPost = postList.find((post) => post.id === postId) || null;

  const navigate = useNavigate();

  const [editedPost, setEditedPost] = useState({
    title: "",
    content: "",
    date: "",
  });

  useEffect(() => {
    if (selectedPost) {
      setEditedPost({
        title: selectedPost.title || "",
        content: selectedPost.content || "",
        date: selectedPost.date || "",
      });
    }
  }, [selectedPost]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedPost((prevPost) => ({ ...prevPost, [name]: value }));
  };

  const handleUpdatePost = () => {
    if (editedPost && editedPost.content) {
      try {
        const contentArray = editedPost.content.split("\n");

        dispatch(updatePost(postId, { ...editedPost, content: contentArray }));
        navigate(`/viewPost/${postId}`);
      } catch (error) {
        console.error("분할 중 오류:", error);
      }
    }
  };

  return (
    <>
      <Header />
      <section>
        <div className={editStyle.editPostWrapper}>
          <input
            type="date"
            name="date"
            value={editedPost.date}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="title"
            value={editedPost.title}
            onChange={handleInputChange}
          />
          <textarea
            name="content"
            value={editedPost.content}
            onChange={handleInputChange}
          />

          {/* 수정 버튼 */}
          <button onClick={handleUpdatePost}>완료</button>
        </div>
      </section>
    </>
  );
};

export default EditPost;
