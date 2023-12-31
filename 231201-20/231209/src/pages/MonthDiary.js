import { useState } from "react";
import MonthItem from "../components/months/MonthItem";

const MonthDiary = () => {
  const [monthlyDiary, setMonthlyDiary] = useState([]);

  const [newMonth, setNewMonth] = useState("");
  const [selectData, setSelectData] = useState(null);

  const handleAddMonth = () => {
    if (newMonth.trim() !== "") {
      setMonthlyDiary([...monthlyDiary, { 월: newMonth }]);
      setNewMonth("");
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleAddMonth();
    }
  };

  const handleSelectMonth = (selectedMonth) => {
    const data = monthlyDiary.find((diary) => diary.월 === selectedMonth);
    setSelectData(data);
  };

  // 월별 일기 페이지
  return (
    <div>
      <input
        type="text"
        value={newMonth}
        onChange={(e) => setNewMonth(e.target.value)}
        onKeyDown={handleEnter}
        placeholder="새로운 월 일기 추가"
      />
      <button onClick={handleAddMonth}>월 추가</button>
      <ul>
        <MonthItem monthlyDiary={monthlyDiary} onSelect={handleSelectMonth} />
      </ul>
    </div>
  );
};

export default MonthDiary;
