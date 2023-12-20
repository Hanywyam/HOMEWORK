import { Link } from "react-router-dom";
import diaryDB from "../../db/diaryDB";
import monthlyStyle from "./months.module.css";

const MonthItem = ({ monthlyDiary, onSelect, onDelete }) => {
  const {id, title}= monthlyDiary;
  const getRandomDiary = () => {
    const randomIndex = Math.floor(Math.random() * diaryDB.length);
    return diaryDB[randomIndex];
  };
  return (
    <ul className={monthlyStyle.monthlyList}>
      {monthlyDiary.map((diary) => (
        <li key={id}>
          <Link to={`/diary/${diary._id}`} onClick={() => onSelect(title)}>
            <img
              src={getRandomDiary().image}
              alt={getRandomDiary().name}
              className={monthlyStyle.monthlyImg}
            />
            <span>{diary.월}</span>
          </Link>
          <button
            onClick
            className={monthlyStyle.deleteBtn}>
            삭제
          </button>
        </li>
      ))}
    </ul>
  );
};

export default MonthItem;
