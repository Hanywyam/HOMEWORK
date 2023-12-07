import React from "react";
import MonthList from "../components/months/MonthList";

const MonthDiary = () => {
  return (
    <div>
      <button>추가</button>
      <p>월별 일기 페이지</p>
      <MonthList />
    </div>
  );
};

export default MonthDiary;
