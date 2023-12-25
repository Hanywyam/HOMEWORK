import { useCallback, useEffect, useRef, useState } from "react";
import { Container, Button, Form, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import style from "./home.module.css";

const Join = () => {
  const navigate = useNavigate();

  const [msg, setMsg] = useState("");
  const [formData, setFormData] = useState({
    userId: "",
    userPw: "",
    userEmail: "",
  });
  const { userId, userPw, userEmail } = formData;

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/signup", formData);

      if (res.status !== 200) {
        // 서버가 요청을 제대로 처리하지 못하면
        throw new Error("회원가입 실패");
      }

      alert("회원가입 성공");
      navigate("/");
    } catch (err) {
      setMsg(err.message);
    }
    console.log("formData : ", formData);
  };
  const onBack = () => navigate(-1);

  return (
    <Container className={style.join}>
      <button onClick={onBack} className={style.back}>
        ◀<span></span>
      </button>
      <h1>
        <img src="/images/logo.png" alt="logo" className={style.login_logo} />
      </h1>
      <h2>
        누띠를 이용하시기 전에
        <br />
        이용약관에 동의해주세요 :)
      </h2>
      <Form onSubmit={handleSubmit}>
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
