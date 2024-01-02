import { Routes, Route, useNavigate } from "react-router-dom";
import footerStyle from "./footer.module.css";
import iconDB from "../db/iconDB";
import Login from "../components/home/Login";
import Home from "../pages/Home";
import MonthDiary from "../pages/MonthDiary";
import axios from "axios";

const Footer = () => {
  const path = process.env.PUBLIC_URL;
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await axios.get("/logout");
      if (res.data.user === null) {
        alert("로그아웃 되었습니다");
        navigate("/");
      }
    } catch (err) {
      console.log("로그아웃 오류: ", err);
      alert("로그아웃 중 오류가 발생했습니다.");
    }
  };

  return (
    <footer className={footerStyle.footerWrapper}>
      <div className={footerStyle.footerCont}>
        {iconDB.map((icon, idx) => (
          <button
            className={footerStyle.footerBtn}
            key={idx}
            onClick={() => {
              if (icon.logout) {
                handleLogout(); // 로그아웃 버튼 클릭시 처리
              } else {
                navigate(`${icon.path}`);
              }
            }}>
            <img src={path + icon.image} alt={icon.alt} />
          </button>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
