import React from "react";
import CommentInput from "../components/comment/CommentInput";
import Header from "../components/Header";

const Comment = () => {
  return (
    <div>
      <Header title="댓글" />
      <CommentInput />
    </div>
  );
};

export default Comment;
