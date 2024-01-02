import React from "react";
import { Link } from "react-router-dom";
import profileDB from "../../db/profileDB";
import style from "./home.module.css";

const ProfileImg = ({ onSelectProfile }) => {
  return (
    <div className={style.profileDb}>
      <h2>나를 나타낼 동물친구를 골라보아요 :)</h2>
      <ul className={style.profileImgBox}>
        {profileDB.map((profile) => (
          <li key={profile.id} className={style.animalsBox}>
            {" "}
            <img
              src={profile.image}
              alt={profile.name}
              className={style.animal}
              onClick={() => onSelectProfile(profile)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileImg;
