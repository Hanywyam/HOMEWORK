import { useState, useCallback } from "react";
import { Container, Button, Form, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import style from "./home.module.css";

const Login = () => {
  const navigate = useNavigate();
  const onBack = () => navigate(-1);

  const [errMsg, setErrMsg] = useState("");
  const [formData, setFormData] = useState({
    userId: "",
    userPw: "",
  });
  const { userId, userPw } = formData;

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }, []);

  const handleLogin = useCallback(
    async (e) => {
      e.preventDefault();

      try {
        const res = await axios.post("/login", formData);

        if (res.data.err) {
          throw new Error("로그인 실패", res.data.err);
        }

        alert("로그인 성공: ", res.data);
        navigate("/");
      } catch (err) {
        console.log("로그인 오류: ", err);

        setErrMsg("아이디나 비밀번호가 틀렸습니다");
      }
      console.log("전송된 id, pw: ", formData);
    },
    [formData, navigate]
  );

  return (
    <Container className={style.login}>
      <button onClick={onBack} className={style.back}>
        ◀️<span></span>
      </button>
      <h1>
        <img src="/images/logo.png" alt="logo" className={style.login_logo} />
      </h1>
      <h2>
        누띠를 이용하시기 전에
        <br />
        로그인 해주세요 :)
      </h2>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="닉네임을 입력하세요"
            name="userId"
            value={userId}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            placeholder="비밀번호를 입력하세요"
            name="userPw"
            value={userPw}
            onChange={handleChange}
          />
        </Form.Group>

        {errMsg && <Alert variant="danger">{errMsg}</Alert>}

        <Button variant="primary" type="submit" className={style.login_button}>
          로그인
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
