import React, { useCallback, useState } from "react";
import { Container, Button, Form, Alert } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import style from "./home.module.css";
import Header from "../Header";
import ProfileImg from "./ProfileImg";

const Join = () => {
  const navigate = useNavigate();

  const [msg, setMsg] = useState("");
  const [formData, setFormData] = useState({
    userId: "",
    userPw: "",
    userEmail: "",
  });
  const { userId, userPw, userEmail } = formData;

  const [selectedProfile, setSelectedProfile] = useState(null);
  const [isProfileSelectionVisible, setProfileSelectionVisible] =
    useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }, []);

  const handleProfileSelect = (profile) => {
    setSelectedProfile(profile);
    setProfileSelectionVisible(false);
  };

  const toggleProfileSelection = () => {
    setProfileSelectionVisible(!isProfileSelectionVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userId) {
      setMsg("아이디를 입력해주세요.");
      return;
    } else if (!userPw) {
      setMsg("비밀번호를 입력해주세요.");
      return;
    } else if (!userEmail) {
      setMsg("이메일을 입력해주세요.");
      return;
    } else if (!selectedProfile) {
      setMsg("프로필 이미지를 선택해주세요.");
      return;
    }

    try {
      const res = await axios.post("/signup", {
        ...formData,
        profileImage: selectedProfile.image,
      });

      if (res.status === 200) {
        alert("회원가입 성공");
        navigate("/");
      } else {
        throw new Error("회원가입 실패");
      }
    } catch (err) {
      setMsg(err.message);
    }
  };

  return (
    <Container className={style.join}>
      <Header title="회원가입" />
      <Form onSubmit={handleSubmit}>
        {/* 프로필 이미지 선택 부분 */}
        <div className={style.profileImgContainer}>
          <Link
            to="#"
            onClick={toggleProfileSelection}
            className={`${style.profileImg} ${
              selectedProfile ? style.selected : ""
            }`}>
            {selectedProfile ? (
              <img
                src={selectedProfile.image}
                alt={selectedProfile.name}
                className={style.selectedProfileImage}
              />
            ) : (
              "프로필 이미지를 선택해 주세요"
            )}
          </Link>
        </div>

        {isProfileSelectionVisible && (
          <ProfileImg onSelectProfile={handleProfileSelect} />
        )}

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="닉네임을 입력하세요"
            name="userId"
            value={userId}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            type="password"
            placeholder="비밀번호를 입력하세요"
            name="userPw"
            value={userPw}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            type="email"
            placeholder="이메일을 입력하세요"
            name="userEmail"
            value={userEmail}
            onChange={handleChange}
          />
        </Form.Group>

        {msg && <Alert variant="danger">{msg}</Alert>}

        <Button variant="primary" type="submit" className={style.join_button}>
          회원가입
        </Button>
      </Form>
    </Container>
  );
};

export default Join;
