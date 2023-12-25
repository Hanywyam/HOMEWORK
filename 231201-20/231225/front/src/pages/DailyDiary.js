import DailyList from "../components/diary/DailyList";
import diaryStyle from "../components/diary/diary.module.css";
import Header from "../components/Header";
import { useNavigate, useParams } from "react-router-dom";

const DailyDiary = () => {
  const { monthParam } = useParams();

  return (
    <div className={diaryStyle.diary}>
      <Header title={monthParam} />
      <DailyList />
    </div>
  );
};

export default DailyDiary;
