// Home.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "../components/home/home.module.css";

const Home = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login", { replace: true });
  };
  const handleJoinClick = () => {
    navigate("/join", { replace: true });
  };

  return (
    <div className={style.logo}>
      <h1>
        <img src="/images/logo.png" alt="logo" className={style.logoimg} />
      </h1>
      <button onClick={handleLoginClick} className={style.login_btn}>
        로 그 인
      </button>
      <button onClick={handleJoinClick} className={style.join_btn}>
        회원가입
      </button>
    </div>
  );
};

export default Home;
