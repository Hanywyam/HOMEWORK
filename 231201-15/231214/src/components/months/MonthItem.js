import { Link } from "react-router-dom";
import monthlyStyle from "./months.module.css";

const MonthItem = ({ monthlyDiary, onSelect }) => {
  return (
    <ul className={monthlyStyle.monthlyList}>
      {monthlyDiary.map((diary) => (
        <li key={diary.월}>
          <Link to={`/diary/${diary.월}`} onClick={() => onSelect(diary.월)}>
            <img
              src={process.env.PUBLIC_URL + "/images/monthDiary_black1.png"}
              alt="diary"
              className={monthlyStyle.monthlyImg}
            />
            <span>{diary.월}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MonthItem;
