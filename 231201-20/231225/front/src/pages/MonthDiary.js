import React, { useEffect, useState } from "react";
import MonthItem from "../components/months/MonthItem";
import monthlyStyle from "../components/months/months.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MonthDiary = () => {
  const path = process.env.PUBLIC_URL;

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

      {monthlyDiary.length === 0 ? (
        <div className={monthlyStyle.backgroundImage}>
          <img src={path + "/images/empty.png"} alt="" />
          <h2>일기장이 없어요.<br />일기장을 추가해 주세요.</h2>
        </div>
      ) : (
        <MonthItem
          monthlyDiary={monthlyDiary}
          onSelect={handleSelectMonth}
          onDelete={handleDeleteMonth}
        />)}
      <Footer />
    </div>
  );
};

export default MonthDiary;
