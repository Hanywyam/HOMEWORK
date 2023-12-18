import React from "react";
import { useParams } from "react-router-dom";

const MonthSelect = ({ data, onClose }) => {
  const { selectedMonth } = useParams();
  const selectedData = data.find((diary) => diary.월 === selectedMonth);

  const modalStyle = {
    width: 200,
    height: 200,
    position: "fixed",
    top: 10,
    right: 10,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #000",
  };

  return (
    <div style={modalStyle}>
      {selectedData ? (
        <ul>
          {data.map((diary) => (
            <li key={diary.월}>{diary.month}</li>
          ))}
        </ul>
      ) : (
        <p>일치하는 데이터가 없습니다.</p>
      )}
      <p onClick={onClose}>닫기</p>
    </div>
  );
};

export default MonthSelect;
