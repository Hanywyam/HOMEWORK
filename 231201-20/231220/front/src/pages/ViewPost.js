import { useSelector } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import profileDB from "../db/profileDB";
import viewPostStyle from "../components/post/viewPost.module.css";
import ViewPostModal from "../components/post/ViewPostModal";

const ViewPost = () => {
  const { postId, updatePostId } = useParams();
  const postList = useSelector((state) => state.post.postList);
  const selectedPost = postList && postList[postId];

  // 메뉴 모달창
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };

  // 프로필 이미지
  const path = process.env.PUBLIC_URL;
  const data = profileDB;

  const randomIndex = Math.floor(Math.random() * data.length);
  const randomProfile = data[randomIndex];
  const randomProfileImage = randomProfile ? path + randomProfile.image : null;

  const { date, title, content } = selectedPost || {};
  console.log("content type:", typeof content);

  const navigate = useNavigate();
  const goDaily = () => navigate("/diary/:monthParam");

  return (
    <section className={viewPostStyle.ViewPostWrapper}>
      <div className={viewPostStyle.ViewPostContent}>
        {randomProfileImage && (
          <div>
            <img src={randomProfileImage} alt={randomProfile.name} />
            <h3>{randomProfile.name}</h3>
          </div>
        )}
        <span className={viewPostStyle.ViewPostContentDate}>{date}</span>
        <span className={viewPostStyle.ViewPostContentCon}>
          <h2>{title}</h2>
          <p>
            {content &&
              content.split("\n").map((paragraph, index) => (
                <React.Fragment key={index}>
                  {paragraph}
                  <br />
                </React.Fragment>
              ))}
          </p>
        </span>
      </div>

      <div className={viewPostStyle.commentWrapper}>
        <div>
          <Link to="/Comment">
            <button className={viewPostStyle.goCommentBtn}>
              <svg
                fill="#000000"
                width="25px"
                height="25px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8,11a1,1,0,1,0,1,1A1,1,0,0,0,8,11Zm4,0a1,1,0,1,0,1,1A1,1,0,0,0,12,11Zm4,0a1,1,0,1,0,1,1A1,1,0,0,0,16,11ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,.3-.71,1,1,0,0,0-.3-.7A8,8,0,1,1,12,20Z" />
              </svg>
            </button>
          </Link>
        </div>
      </div>

      <article>
        {/* <button className={viewPostStyle.ViewPostBackBtn} onClick={goDaily}>
          일기 목록
          <span></span>
        </button> */}
        <div className={viewPostStyle.ViewPostBackBtn}>
          <button onClick={goDaily}>일기 목록</button>
          <span></span>
        </div>

        <button className={viewPostStyle.ViewPostMenuBtn} onClick={onOpen}>
          메뉴
          <span></span>
          <span></span>
          <span></span>
        </button>
      </article>
      {isOpen && <ViewPostModal onClose={onClose} />}
    </section>
  );
};

export default ViewPost;
