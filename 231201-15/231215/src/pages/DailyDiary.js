import { Link } from "react-router-dom";
import DailyList from "../components/diary/DailyList";

const DailyDiary = () => {
  return (
    <div>
      <DailyList />

      <ul>
        <li>
          <Link to="/Posting">일기 작성</Link>
        </li>
      </ul>
    </div>
  );
};

export default DailyDiary;
