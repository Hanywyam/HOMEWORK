import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { addComment } from "../store/modules/postStore";
import CommentInput from "../components/comment/CommentInput";
import CommentList from "../components/comment/CommentList";
import { useState } from "react";
import profileDB from "../db/profileDB";
import viewPostStyle from "../components/post/viewPost.module.css";

const ViewPost = () => {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const postList = useSelector((state) => state.post.postList);
  const selectedPost = postList && postList[postId];
  // 프로필 이미지
  const path = process.env.PUBLIC_URL;
  const [data, setData] = useState(profileDB);

  const randomIndex = Math.floor(Math.random() * data.length);
  const randomProfile = data[randomIndex];
  const randomProfileImage = randomProfile ? path + randomProfile.image : null;

  // 댓글
  const handleAddComment = (newComment) => {
    dispatch(addComment(postId, newComment));
  };

  const { date, title, content } = selectedPost;

  return (
    <section className={viewPostStyle.ViewPostWrapper}>
      <div className={viewPostStyle.ViewPostContent}>
        {randomProfileImage && (
          <div>
            <figure>
              <img src={randomProfileImage} alt={randomProfile.name} />
              <figcaption>{randomProfile.name}</figcaption>
            </figure>
          </div>
        )}
        <span className={viewPostStyle.ViewPostContentDate}>{date}</span>
        <span>
          <h2>{title}</h2>
          <p>{content}</p>
        </span>
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
