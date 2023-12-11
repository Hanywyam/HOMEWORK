import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const goMonth = () => navigate("/MonthDiary");
  return (
    <div>
      <h1>logo</h1>
      <h2>홈 로그인 / 회원가입</h2>
      <button onClick={goMonth}>다음으로</button>
    </div>
  );
};

export default Home;
