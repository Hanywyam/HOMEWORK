import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import viewPostStyle from "./viewPost.module.css";

const ViewPostBtn = ({ form }) => {
  const navigate = useNavigate();
  const { id, title, monthParam } = form || {};

  const onDelete = async () => {
    if (!form) {
      console.error("Form is undefined");
      return;
    }
    const reCheck = window.confirm(`${title} 일기장을 삭제하시겠습니까?`);

    if (reCheck) {
      try {
        await axios.post(`/diary/delete/${id}`);
        navigate(`/diary/${id}`);
      } catch (error) {
        console.log("데이터 삭제 중 오류: ", error);
      }
    }
  };

  return (
    <div className={viewPostStyle.viewPostModalBtn}>
      <Link to={`/diary/update/${id}`}>
        <button>수정</button>
      </Link>
      <button onClick={onDelete}>삭제</button>
    </div>
  );
};

export default ViewPostBtn;
