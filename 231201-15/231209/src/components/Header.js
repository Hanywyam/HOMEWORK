import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const goMonth = () => navigate("+1");
  const backMonth = () => navigate("-1");
  const goHome = () => navigate("/");
  
  return (
    <header>
      <h2>헤더</h2>
      <button onClick={backMonth}>이전으로</button>
      <button onClick={goHome}>홈</button>
      <button onClick={goMonth}>다음으로</button>
    </header>
  );
};

export default Header;
