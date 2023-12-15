import React, { useState } from "react";
import commentStyle from "./comment.module.css";

const CommentInput = ({ onAddComment }) => {
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      onAddComment(newComment);
      setNewComment("");
    }
  };

  return (
    <div className={commentStyle.commentWrapper}>
      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button onClick={handleAddComment}>댓글 추가</button>
    </div>
  );
};

export default CommentInput;
