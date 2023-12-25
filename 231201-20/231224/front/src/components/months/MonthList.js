import { Link, useNavigate, useParams } from "react-router-dom";
import monthlyStyle from "./months.module.css";

const MonthList = () => {
  // const navigate = useNavigate();
  // const goDaily = () => navigate("/DailyList");

  const { monthParam } = useParams();

  return (
    <div className={monthlyStyle.monthlyWrap}>
      <h2>{monthParam} 일기 목록</h2>
      <Link className="addBtn" to="/dailyList">
        추가
      </Link>
    </div>
  );
};

export default MonthList;
