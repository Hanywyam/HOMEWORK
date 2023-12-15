import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deletePost } from "../../store/modules/postStore";
import viewPostStyle from "./viewPost.module.css";

const ViewPostBtn = ({ newPostId, updatedPostList }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onDelete = () => {
    dispatch(deletePost(newPostId, updatedPostList));
    navigate("/dailyList");
  };

  return (
    <div className={viewPostStyle.viewPostModalBtn}>
      <Link to={`/editPost/${newPostId}`}>
        <button>수정</button>
      </Link>
      <button onClick={onDelete}>삭제</button>
    </div>
  );
};

export default ViewPostBtn;
