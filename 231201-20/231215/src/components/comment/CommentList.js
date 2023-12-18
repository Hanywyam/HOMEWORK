import React from "react";
import profileDB from "../../db/profileDB";
import commentStyle from "./comment.module.css";

const CommentList = ({ data, onDeleteComment }) => {
  return (
    <ul>
      {data.map((item, index) => {
        const userProfile = profileDB.find(
          (profile) => profile.id === item.userId
        );

        if (userProfile && userProfile.image && userProfile.name) {
          return (
            <li key={index} className={commentStyle.commentList}>
              <div className={commentStyle.commentUser}>
                <div className={commentStyle.comImgName}>
                  <img
                    src={userProfile.image}
                    alt={`${userProfile.name}의 프로필 이미지`}
                    className={commentStyle.profileImg}
                  />
                  <span className="user-name">{userProfile.name}</span>
                </div>
                <p className={commentStyle.commentDate}>{item.date}</p>
              </div>
              <p className={commentStyle.commentP}>{item.abc}</p>
              <button onClick={() => onDeleteComment(index)}>삭제</button>
            </li>
          );
        } else {
          return null;
        }
      })}
    </ul>
  );
};

export default CommentList;
