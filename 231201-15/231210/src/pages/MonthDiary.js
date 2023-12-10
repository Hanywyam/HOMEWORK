import { useState } from "react";
import MonthList from "../components/months/MonthList";
import monthsData from "../DB/Months";
import { Form, Link, Route, Routes, useParams } from "react-router-dom";
import MonthItem from "../components/months/MonthItem";
import { useDispatch, useSelector } from "react-redux";
import { addMonth, selectMonth } from "../store/modules/monthlyStore";

const MonthDiary = () => {
  const dispatch = useDispatch();
  const monthlyDiary = useSelector((state) => state.monthlyDiary);
  const selectData = useSelector((state) => state.selectData);
  let newMonth = "";

  const handleAddMonth = () => {
    if (newMonth.trim() !== "") {
      dispatch(addMonth(newMonth));
      newMonth = "";
    }
  };

  // Enter키로 입력
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleAddMonth();
    }
  };

  // 월별 일기 페이지
  return (
    <div>
      <input
        type="text"
        value={newMonth}
        onChange={(e) => newMonth(e.target.value)}
        onKeyDown={handleEnter}
        placeholder="새로운 월 일기 추가"
      />
      <button onClick={handleAddMonth}>월 추가</button>
      <ul>{/* <MonthItem /> */}</ul>
    </div>
  );
};

export default MonthDiary;
