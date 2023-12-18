import { useNavigate, useParams } from "react-router-dom";

const MonthList = () => {
  const navigate = useNavigate();
  const goDaily = () => navigate("/DailyDiary");

  const { monthParam } = useParams();

  return (
    <div>
      <p>{monthParam} 일기 목록</p>
      <button onClick={goDaily}>추가</button>
    </div>
  );
};

export default MonthList;
