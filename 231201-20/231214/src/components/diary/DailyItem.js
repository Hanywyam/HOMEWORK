import { useState } from "react";
import profileDB from "../../db/profileDB";
import diaryStyle from "./diary.module.css";

const DailyItem = () => {
  const path = process.env.PUBLIC_URL;
  const [data, setData] = useState(profileDB);

  const randomIndex = Math.floor(Math.random() * data.length);
  const randomProfile = data[randomIndex];
  const randomProfileImage = randomProfile ? path + randomProfile.image : null;

  return (
    <div className={diaryStyle.diaryItem}>
      {randomProfileImage && (
        <img src={randomProfileImage} alt={randomProfile.name} />
      )}
    </div>
  );
};

export default DailyItem;
