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
                <img
                  src={userProfile.image}
                  alt={`${userProfile.name}의 프로필 이미지`}
                  className={commentStyle.profileImg}
                />
                <div className={commentStyle.comImgName}>
                  <span className="user-name">{userProfile.name}</span>
                  <p className={commentStyle.commentDate}>{item.date}</p>
                </div>

                <button
                  onClick={() => onDeleteComment(index)}
                  className={commentStyle.commentBtn}></button>
              </div>
              <p className={commentStyle.commentP}>{item.abc}</p>
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
