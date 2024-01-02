import React from "react";
import posingStyle from "./posting.module.css";

const PostingBtn = ({ handleSubmit, handleReset }) => {
  return (
    <div className={posingStyle.postingBtn}>
      <button onClick={handleSubmit} className={posingStyle.addBtn}>
        저장
      </button>
      <button
        variant="secondary"
        onClick={handleReset}
        className={posingStyle.resetBtn}
      >
        취소
      </button>
    </div>
  );
};

export default PostingBtn;
