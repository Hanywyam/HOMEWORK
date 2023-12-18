import React from "react";
import { Link } from "react-router-dom";
import posingStyle from "./posting.module.css";

const PostingBtn = ({ handleAddPost }) => {
  return (
    <div className={posingStyle.postingBtn}>
      <Link to="/dailyList">
        <button>취소</button>
      </Link>

      <button onClick={handleAddPost} className="addBtn">
        추가
      </button>
    </div>
  );
};

export default PostingBtn;
