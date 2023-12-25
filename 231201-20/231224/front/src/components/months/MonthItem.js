import { Link } from "react-router-dom";
import diaryDB from "../../db/diaryDB";
import monthlyStyle from "./months.module.css";

const MonthItem = ({ monthlyDiary, onSelect, onDelete }) => {
  // const { title } = monthlyDiary;
  // const getRandomDiary = () => {
  // const randomIndex = Math.floor(Math.random() * diaryDB.length);
  // return diaryDB[randomIndex];
  // };
  return (
    <ul className={monthlyStyle.monthlyList}>
      {monthlyDiary.map(
        (diary) => (
          <li key={diary._id}>
            <Link
              to={`/diary/${diary._id}`}
              onClick={() => onSelect(diary.title)}>
              {/* <img
                src={getRandomDiary().image}
                alt={getRandomDiary().name}
                className={monthlyStyle.monthlyImg}
              /> */}
              <span>{diary.title}</span>
            </Link>
            <button className={monthlyStyle.deleteBtn}>삭제</button>
          </li>
        )
        // console.log("일기장 데이터 확인", monthlyDiary)
      )}
    </ul>
  );
};

export default MonthItem;
