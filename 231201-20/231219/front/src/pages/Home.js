import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import style from "../components/home/home.module.css";
import Loading from "../pages/Loading"; // 로딩 컴포넌트 import

const LoginButton = () => (
  <Link to="/login">
    <Button variant="warning" className={style.login_btn}>
      로그인
    </Button>
  </Link>
);

const Home = () => {
  const [loading, setLoading] = useState(true); // 로딩 상태 추가
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storageUser = localStorage.getItem("user");

    if (storageUser) {
      setUser(JSON.parse(storageUser));
    }

    // 로딩 상태 변경
    setTimeout(() => {
      setLoading(false);
    }, 1300);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Container className={style.logo}>
      <h1>
        <img src="/images/logo.png" alt="logo" className={style.logoimg} />
      </h1>
      {user ? (
        <div>
          <h3>환영합니다 {user.userId}님</h3>
          <Button
            variant="primary"
            onClick={handleLogout}
            className={style.login_btn}
          >
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
