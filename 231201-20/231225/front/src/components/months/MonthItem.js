import { Link } from "react-router-dom";
import diaryDB from "../../db/diaryDB";
import monthlyStyle from "./months.module.css";

const MonthItem = ({ monthlyDiary, onSelect, onDelete }) => {
  const handleDelete = (month) => {
    const confirmDelete = window.confirm("일기장을 삭제하시겠습니까?");
    if (confirmDelete) {
      onDelete(month);
    }
  };

  const getRandomDiary = () => {
    const randomIndex = Math.floor(Math.random() * diaryDB.length);
    return diaryDB[randomIndex];
  };
  return (
    <ul className={monthlyStyle.monthlyList}>
      {monthlyDiary.map((diary, idx) => (
        <li key={idx}>
          <Link to={`/diary/${diary.월}`} onClick={() => onSelect(diary.월)}>
            <img
              src={getRandomDiary().image}
              alt={getRandomDiary().name}
              className={monthlyStyle.monthlyImg}
            />
            <span>{diary.월}</span>
          </Link>
          <button
            onClick={() => handleDelete(diary.월)}
            className={monthlyStyle.deleteBtn}>
            삭제
          </button>
        </li>
      ))}
    </ul>
  );
};

export default MonthItem;
