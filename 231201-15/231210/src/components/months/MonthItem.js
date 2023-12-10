import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addMonth, selectMonth } from "../../store/modules/monthlyStore";

const MonthItem = () => {
  const dispatch = useDispatch();
  const monthlyDiary = useSelector((state) => state.monthlyDiary);

  const handleSelectMonth = (selectedMonth) => {
    dispatch(selectMonth(selectedMonth));
  };

  return (
    <div>
      {monthlyDiary.map((diary) => (
        <li key={diary.월}>
          <Link
            to={`/diary/${diary.월}`}
            onClick={() => handleSelectMonth(diary.월)}>
            {diary.월}
          </Link>
        </li>
      ))}
    </div>
  );
};

export default MonthItem;
