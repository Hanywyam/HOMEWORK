import { Routes, Route, useNavigate } from "react-router-dom";
import footerStyle from "./footer.module.css";
import iconDB from "../db/iconDB";
import Login from "../components/home/Login";
import Home from "../pages/Home";
import MonthDiary from "../pages/MonthDiary";

const Footer = () => {
  const path = process.env.PUBLIC_URL;
  const navigate = useNavigate();

  return (
    <footer className={footerStyle.footerWrapper}>
      <div className={footerStyle.footerCont}>
        {iconDB.map((icon, idx) => (
          <button
            className={footerStyle.footerBtn}
            key={idx}
            path={icon.path}
            onClick={() => navigate(`${icon.path}`)}>
            <img src={path + icon.image} alt={icon.alt} />
          </button>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
