import React from "react";
import { useNavigate } from "react-router-dom";
import headerStyle from "./header.module.css";

const Header = ({ title }) => {
  const navigate = useNavigate();
  const backMonth = () => navigate(-1);
  return (
    <header className={headerStyle.headerWrapper}>
      <div>
        <h2>{title}</h2>
        <button onClick={backMonth} className={headerStyle.headerBtn}>
          이전으로<span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
