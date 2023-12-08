import { useState } from "react";
import MonthList from "../components/months/MonthList";
import monthsData from "../DB/Months";
import { Link, Route, Routes, useParams } from "react-router-dom";
import MonthSelect from "../components/months/MonthSelect";

const MonthDiary = () => {
  const [monthlyDiary, setMonthlyDiary] = useState(monthsData);

  const handleAddMonth = (select) => {
    const selectedData = monthlyDiary.find((diary) => diary.월 === select);
    const newMonth = `${selectedData}`;
    console.log(newMonth);
    setMonthlyDiary([...monthlyDiary, { month: newMonth }]);
  };

  // 월별 일기 페이지
  return (
    <div>
      <button onClick={handleAddMonth}>월 추가</button>
      <ul>
        {monthlyDiary.map((diary) => (
          <li key={diary.월}>
            <Link to={`/diary/${diary.월}`}>{diary.month}</Link>
          </li>
        ))}
      </ul>

      <Routes>
        <Route
          path="/diary/:selectedMonth"
          element={<MonthSelect data={monthlyDiary} />}
        />
      </Routes>
    </div>
  );
};

export default MonthDiary;
