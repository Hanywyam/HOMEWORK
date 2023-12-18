import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addMonth,
  setNewMonth,
  selectMonth,
} from "../store/modules/monthlyStore";

const MonthDiary = () => {
  const dispatch = useDispatch();
  const { monthlyDiary, newMonth, selectData } = useSelector(
    (state) => state.monthly
  );

  const handleAddMonth = () => {
    if (newMonth.trim() !== "") {
      dispatch(addMonth(newMonth));
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleAddMonth();
    }
  };

  const handleSelectMonth = (selectedMonth) => {
    dispatch(selectMonth(selectedMonth));
  };

  // 월별 일기 페이지
  return (
    <div>
      <input
        type="text"
        value={newMonth}
        onChange={(e) => dispatch(setNewMonth(e.target.value))}
        onKeyDown={handleEnter}
        placeholder="새로운 월 일기 추가"
      />
      <button onClick={handleAddMonth}>월 추가</button>
      <ul>
        {monthlyDiary.map((diary) => (
          <li key={diary.월}>
            <Link
              to={`/diary/${diary.월}`}
              onClick={() => handleSelectMonth(diary.월)}>
              {diary.월}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MonthDiary;
