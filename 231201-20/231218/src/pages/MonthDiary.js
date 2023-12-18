import React, { useEffect, useState } from "react";
import MonthItem from "../components/months/MonthItem";
import monthlyStyle from "../components/months/months.module.css";
import Header from "../components/Header";
import monthly from "../db/Months";

const MonthDiary = () => {
  const [monthlyDiary, setMonthlyDiary] = useState([]);
  const [newMonth, setNewMonth] = useState("");
  const [showModal, setShowModal] = useState(false);
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
    const selectedData = monthly.find((diary) => diary.월 === selectedMonth);
    // 선택된 월에 대한 추가적인 로직 수행
    setShowModal(true);
    setSelectedMonths([selectedMonth]);
  };

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const handleDeleteSelectedMonths = () => {
    const updatedDiary = monthlyDiary.filter(
      (diary) => !selectedMonths.includes(diary.월)
    );
    setMonthlyDiary(updatedDiary);
    localStorage.setItem("storageData", JSON.stringify(updatedDiary));
    setShowModal(false);
    setSelectedMonths([]);
  };

  const handleCheckboxChange = (month) => {
    const updatedSelectedMonths = selectedMonths.includes(month)
      ? selectedMonths.filter((selectedMonth) => selectedMonth !== month)
      : [...selectedMonths, month];
    setSelectedMonths(updatedSelectedMonths);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={monthlyStyle.monthlyWrap}>
      <Header title="일기장" onDelete={handleToggleModal} />
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

      <MonthItem
        monthlyDiary={monthlyDiary}
        onSelect={handleSelectMonth}
        onCheckboxChange={handleCheckboxChange}
        selectedMonths={selectedMonths}
        showModal={showModal}
        onDelete={handleDeleteSelectedMonths}
      />
    </div>
  );
};

export default MonthDiary;
