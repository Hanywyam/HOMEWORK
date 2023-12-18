import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./home.module.css";

const Join = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [termsAgreed, setTermsAgreed] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleTermsAgreementChange = () => {
    setTermsAgreed(!termsAgreed);
  };
  const handleSignup = () => {
    if (termsAgreed) {
      console.log("회원가입 시도:", username, email, password);
    } else {
      alert("이용약관에 동의해주세요.");
    }

    navigate("/login", { replace: true });
  };

  const navigate = useNavigate();
  const onBack = () => {
    navigate(-1);
  };

  return (
    <div className={style.join}>
      <button onClick={onBack} className={style.back}>
        ◀️
      </button>
      <h1>
        <img src="/images/logo.png" alt="logo" className={style.login_logo} />
      </h1>
      <h2>
        누띠를 이용하시기 전에
        <br />
        이용약관에 동의해주세요 :)
      </h2>
      <form>
        <label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="닉네임"
          />
        </label>
        <br />
        <label>
          <input
            input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="이메일"
          />
        </label>
        <br />
        <label>
          <input
            input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="비밀번호"
          />
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={termsAgreed}
            onChange={handleTermsAgreementChange}
            className={style.checked}
          />
          이용약관에 동의합니다.
        </label>
        <br />
        <button
          type="button"
          onClick={handleSignup}
          className={style.join_button}>
          가 입 하 기
        </button>
      </form>
    </div>
  );
};

export default Join;
