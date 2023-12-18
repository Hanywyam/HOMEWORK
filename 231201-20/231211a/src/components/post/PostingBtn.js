import React from "react";
import { Link } from "react-router-dom";

const PostingBtn = ({ handleAddPost }) => {
  return (
    <div>
      <Link to="/dailyList">
        <button>취소</button>
      </Link>

      <button onClick={handleAddPost}>추가</button>
    </div>
  );
};

export default PostingBtn;
