import React from "react";
import ViewPostBtn from "./ViewPostBtn";
import viewPostStyle from "./viewPost.module.css";

const ViewPostModal = ({ onClose }) => {
  return (
    <div className={viewPostStyle.viewPostModal}>
      <button onClick={onClose}>닫기</button>
      <ViewPostBtn />
    </div>
  );
};

export default ViewPostModal;
