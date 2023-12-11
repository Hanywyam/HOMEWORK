import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { addComment } from "../store/modules/postStore";
import CommentInput from "../components/comment/CommentInput";
import CommentList from "../components/comment/CommentList";

const ViewPost = () => {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const postList = useSelector((state) => state.post.postList);
  const selectedPost = postList && postList[postId];

  // 댓글
  const handleAddComment = (newComment) => {
    dispatch(addComment(postId, newComment));
  };

  const { date, title, content } = selectedPost;

  return (
    <section>
      <div>
        <div>{date}</div>
        <div>
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
      </div>

      {/* 댓글 입력 */}
      <CommentInput onAddComment={handleAddComment} />
      <CommentList comments={selectedPost.comments || []} />

      <Link to="/dailyList">
        <button>일기 목록</button>
      </Link>
    </section>
  );
};

export default ViewPost;
