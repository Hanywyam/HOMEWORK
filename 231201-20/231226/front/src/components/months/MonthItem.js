import { Link } from "react-router-dom";
import monthlyStyle from "./months.module.css";

const MonthItem = ({ monthlyDiary, onSelect, onDelete }) => {
  return (
    <ul className={monthlyStyle.monthlyList}>
      {monthlyDiary &&
        monthlyDiary.map((diary) => (
          <li key={diary._id}>
            <Link
              to={`/diary/${diary._id}`}
              onClick={(e) => {
                e.preventDefault();
                onSelect(diary.title, e);
              }}>
              <img
                src={diary.image} // 저장된 이미지 URL을 사용합니다
                alt={diary.name}
                className={monthlyStyle.monthlyImg}
              />
              <span>{diary.title}</span>
            </Link>
            <button
              className={monthlyStyle.deleteBtn}
              onClick={() => onDelete(diary._id)}>
              삭제
            </button>
          </li>
        ))}
    </ul>
  );
};

export default MonthItem;
