import React from "react";
import { useNavigate } from "react-router-dom";
import headerStyle from "./header.module.css";

const Header = () => {
  const navigate = useNavigate();
  const backMonth = () => navigate(-1);
  return (
    <header className={headerStyle.headerWrapper}>
      <h2>헤더</h2>
      <button onClick={backMonth} className={headerStyle.headerBtn}>
        이전으로<span></span>
      </button>
    </header>
  );
};

export default Header;
