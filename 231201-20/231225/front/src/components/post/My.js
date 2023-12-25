import React, { useState } from 'react';
import profileDB from "../../db/profileDB";
import viewPostStyle from "./viewPost.module.css";
import Header from '../Header';
import Footer from '../Footer';

const My = () => {
  const [user, setUser] = useState(null);

  const path = process.env.PUBLIC_URL;
  const data = profileDB;

  const randomIndex = Math.floor(Math.random() * data.length);
  const randomProfile = data[randomIndex];
  const randomProfileImage = randomProfile ? path + randomProfile.image : null;

  return (
    <section className={viewPostStyle.ViewPostWrapper}>
      <Header title={"My profile"} />
      <div style={{ margin: 50 }}>
        <div className={viewPostStyle.ViewPostContent}>
          {randomProfileImage && (
            <div>
              <img src={randomProfileImage} alt={randomProfile.name} />
              <h3>{randomProfile.name}</h3>
            </div>
          )}
        </div>
      </div>
      {/* <h2>{user.userId}</h2> */}
      <Footer />
    </section>
  );
};

export default My;