import React from "react";
import posingStyle from "./posting.module.css";

const PostingBtn = ({ handleAddPost }) => {
  return (
    <div className={posingStyle.postingBtn}>
      <button onClick={handleAddPost} className={posingStyle.addBtn}>
        작성완료
      </button>
    </div>
  );
};

export default PostingBtn;
