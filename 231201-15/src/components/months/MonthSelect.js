import React from "react";
import { useParams } from "react-router-dom";

const MonthSelect = ({ data }) => {
  const { selectedMonth } = useParams();
  const selectedData = data.find((diary) => diary.월 === selectedMonth);

  return (
    <div>
      {selectedData ? (
        <div>
          <h2>{selectedData.월} 일기</h2>
        </div>
      ) : (
        <p>일치하는 데이터가 없습니다.</p>
      )}
    </div>
  );
};

export default MonthSelect;
