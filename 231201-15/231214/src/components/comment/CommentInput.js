import React, { useState, useEffect } from "react";
import commentStyle from "./comment.module.css";
import CommentList from "./CommentList";
import profileDB from "../../db/profileDB";

const CommentInput = () => {
  const [inputText, setInputText] = useState("");
  const [data, setData] = useState([]);

  const handleSave = () => {
    if (inputText.trim() !== "") {
      const userId = Math.floor(Math.random() * profileDB.length) + 1;
      const currentDate = new Date().toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      const dataList = [...data, { userId, abc: inputText, date: currentDate }];
      setData(dataList);
      localStorage.setItem("storageData", JSON.stringify(dataList));
      setInputText("");
    }
  };

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
    localStorage.setItem("storageData", JSON.stringify(newData));
  };

  useEffect(() => {
    const storageList = JSON.parse(localStorage.getItem("storageData"));
    setData(storageList || []);
  }, []);

  return (
    <div>
      <form className={commentStyle.commentForm}>
        <input
          type="text"
          placeholder="댓글을 작성하세요"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className={commentStyle.commentInput}
        />
        <button onClick={handleSave} className={commentStyle.commentBtn}>
          확인
        </button>
      </form>
      <CommentList data={data} onDeleteComment={handleDelete} />
    </div>
  );
};

export default CommentInput;
