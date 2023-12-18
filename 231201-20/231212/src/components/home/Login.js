import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./home.module.css";

const Login = () => {
  const navigate = useNavigate();
  const onBack = () => {
    navigate(-1);
  };
  const handleGoMonth = () => {
    navigate("/MonthDiary", { replace: true });
  };

  return (
    <div className={style.login}>
      <button onClick={onBack} className={style.back}>
        ◀️
      </button>
      <h1>
        <img src="/images/logo.png" alt="logo" className={style.login_logo} />
      </h1>
      <h2>
        누띠를 이용하시기 전에
        <br />
        로그인 해주세요 :)
      </h2>
      <form>
        <label>
          <input type="text" placeholder="아이디" className={style.id_box} />
        </label>
        <br />
        <label>
          <input
            type="password"
            placeholder="비밀번호"
            className={style.id_box}
          />
        </label>
        <br />
        <button onClick={handleGoMonth} className={style.login_button}>
          로 그 인
        </button>
      </form>
    </div>
  );
};

export default Login;
