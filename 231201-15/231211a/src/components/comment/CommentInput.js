import React, { useState } from "react";

const CommentInput = ({ onAddComment }) => {
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      onAddComment(newComment);
      setNewComment("");
    }
  };

  return (
    <div>
      <h3>CommentInput</h3>

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
