import { Link } from "react-router-dom";

const MonthItem = ({ monthlyDiary, onSelect }) => {
  return (
    <div>
      {monthlyDiary.map((diary) => (
        <li key={diary.월}>
          <Link to={`/diary/${diary.월}`} onClick={() => onSelect(diary.월)}>
            {diary.월}
          </Link>
        </li>
      ))}
    </div>
  );
};

export default MonthItem;
