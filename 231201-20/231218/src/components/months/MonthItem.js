// MonthItem 컴포넌트

import React from "react";
import { Link } from "react-router-dom";
import monthlyStyle from "./months.module.css";

const MonthItem = ({ monthlyDiary, onSelect, onDelete, showModal }) => {
  return (
    <ul className={monthlyStyle.monthlyList}>
      {monthlyDiary.map((diary, idx) => (
        <li key={idx}>
          <Link to={`/diary/${diary.월}`} onClick={() => onSelect(diary.월)}>
            <img
              src={process.env.PUBLIC_URL + "/images/monthDiary_black1.png"}
              alt="diary"
              className={monthlyStyle.monthlyImg}
            />
            <span>{diary.월}</span>
          </Link>
          <button
            onClick={() => onDelete(diary.월)}
            className={monthlyStyle.deleteBtn}>
            삭제
          </button>
        </li>
      ))}
    </ul>
  );
};

export default MonthItem;
