import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 훅을 가져옵니다.
import axios from "axios";
import viewPostStyle from "./viewPost.module.css";
import Header from "../Header";
import Footer from "../Footer";

const My = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // useNavigate 훅을 사용합니다.

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get("/user/profile");
        setUser(response.data);
      } catch (error) {
        console.error("프로필 정보를 가져오는 중 오류 발생:", error);
        if (error.response && error.response.status === 401) {
          alert("로그인이 필요합니다.");
          navigate("/login");
        }
      }
    };

    fetchUserProfile();
  }, [navigate]);

  return (
    <section className={viewPostStyle.mypage}>
      <Header title={"My profile"} />
      <div>
        {user && (
          <div className={viewPostStyle.myContent}>
            <img src={user.profileImage} alt={user.userId} />
            <h3>닉네임 : {user.userId}</h3>
            <h3>이메일 : {user.userEmail}</h3>
          </div>
        )}
      </div>
      <Footer />
    </section>
  );
};

export default My;
