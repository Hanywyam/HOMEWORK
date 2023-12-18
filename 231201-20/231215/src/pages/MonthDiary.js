import { useState } from "react";
import MonthItem from "../components/months/MonthItem";
import monthlyStyle from "../components/months/months.module.css";
import Header from "../components/Header";
import monthly from "../db/Months";

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

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // 월별 일기 페이지
  return (
    <div className={monthlyStyle.monthlyWrap}>
      <Header title="일기장" />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newMonth}
          onChange={(e) => setNewMonth(e.target.value)}
          onKeyDown={handleEnter}
          placeholder="일기장 추가"
        />
        <button
          className={monthlyStyle.monthlyInputBtn}
          onClick={handleAddMonth}>
          월 추가
        </button>
      </form>

      <ul>
        <MonthItem monthlyDiary={monthlyDiary} onSelect={handleSelectMonth} />
      </ul>
    </div>
  );
};

export default MonthDiary;
