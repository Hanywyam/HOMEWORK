import React, { useEffect, useState, useCallback } from "react";
import { Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import style from "../components/home/home.module.css";
import Loading from "../pages/Loading"; // 로딩 컴포넌트 import
import axios from "axios";

const LoginButton = () => (
  <Link to="/login">
    <Button variant="warning" className={style.login_btn}>
      로그인
    </Button>
  </Link>
);

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getUserSession = async () => {
      try {
        const res = await axios.get("/login");
        setUser(res.data.user);
      } catch (err) {
        console.log("세션 오류: ", err);
      }
    };
    getUserSession();

    // 로딩화면
    setTimeout(() => {
      setLoading(false);
    }, 1300);
  }, []);

  // 로그아웃
  const handleLogout = useCallback(async () => {
    try {
      const res = await axios.get("/logout");
      if (res.data.user === null) {
        setUser(null);
        navigate("/");
      }
    } catch (err) {
      console.log("로그아웃 오류: ", err);
    }
  }, [navigate]);

  return (
    <Container className={style.logo}>
      <h1>
        <img src="/images/logo.png" alt="logo" className={style.logoimg} />
      </h1>
      {user ? (
        <div className={style.click_btn}>
          <h3>환영합니다 {user.userId}님</h3>
          <Button
            onClick={() => navigate("/monthDiary/new")}
            className={style.going_btn}>
            Enter to NuTTi
          </Button>
          <br />
          <Button
            variant="primary"
            onClick={handleLogout}
            className={style.logout_btn}>
            로그아웃
          </Button>
        </div>
      ) : (
        <div className={style.homeBtn}>
          <LoginButton />
          <Link to="/join">
            <Button variant="success" className={style.join_btn}>
              회원가입
            </Button>
          </Link>
        </div>
      )}
    </Container>
  );
};

export default Home;
