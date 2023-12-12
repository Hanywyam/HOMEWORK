import { Link } from "react-router-dom";
import monthlyStyle from "./months.module.css";

const MonthItem = ({ monthlyDiary, onSelect }) => {
  return (
    <ul className={monthlyStyle.monthlyList}>
      {monthlyDiary.map((diary) => (
        <li key={diary.월}>
          <Link to={`/diary/${diary.월}`} onClick={() => onSelect(diary.월)}>
            {diary.월}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MonthItem;
