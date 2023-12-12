import React from "react";

const CommentList = ({ comments }) => {
  return (
    <ul>
      {comments.map((com, index) => (
        <li key={index}>{com}</li>
      ))}
    </ul>
  );
};

export default CommentList;
