import React, { useEffect, useState } from "react";
import MonthItem from "../components/months/MonthItem";
import monthlyStyle from "../components/months/months.module.css";
import Header from "../components/Header";

const MonthDiary = () => {
  const [monthlyDiary, setMonthlyDiary] = useState([]);
  const [newMonth, setNewMonth] = useState("");
  const [selectedMonths, setSelectedMonths] = useState([]);

  const handleAddMonth = () => {
    if (newMonth.trim() !== "") {
      const updatedDiary = [...monthlyDiary, { 월: newMonth }];
      setMonthlyDiary(updatedDiary);
      localStorage.setItem("storageData", JSON.stringify(updatedDiary));
      setNewMonth("");
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleAddMonth();
    }
  };

  useEffect(() => {
    const storageList = JSON.parse(localStorage.getItem("storageData"));
    setMonthlyDiary(storageList || []);
  }, []);

  const handleSelectMonth = (selectedMonth) => {
    setSelectedMonths([selectedMonth]);
  };

  const handleDeleteMonth = (month) => {
    const updatedDiary = monthlyDiary.filter((diary) => diary.월 !== month);
    setMonthlyDiary(updatedDiary);
    localStorage.setItem("storageData", JSON.stringify(updatedDiary));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={monthlyStyle.monthlyWrap}>
      <Header title="일기장" />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newMonth}
          onChange={(e) => setNewMonth(e.target.value)}
          onKeyDown={handleEnter}
          placeholder="일기장 추가 (10글자 이하 작성)"
        />
        <button
          className={monthlyStyle.monthlyInputBtn}
          onClick={handleAddMonth}>
          월 추가
        </button>
      </form>

      <MonthItem
        monthlyDiary={monthlyDiary}
        onSelect={handleSelectMonth}
        onDelete={handleDeleteMonth}
      />
    </div>
  );
};

export default MonthDiary;
