import { useState, useCallback } from "react";
import { Container, Button, Form, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import style from "./home.module.css";

const Login = () => {
  const navigate = useNavigate();
  const onBack = () => navigate(-1);
  const onNext = () => {
    navigate("/MonthDiary/*");
  };
  const [errMsg, setErrMsg] = useState("");
  const [formData, setFormData] = useState({
    userId: "",
    userPw: "",
  });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }, []);

  const handleLogin = useCallback(
    (e) => {
      e.preventDefault();

      const storageUserList = JSON.parse(localStorage.getItem("user"));
      const checkUser = storageUserList.find(
        (list) =>
          list.userId === formData.userId && list.userPw === formData.userPw
      );

      if (checkUser) {
        localStorage.setItem("user", JSON.stringify(checkUser));
        navigate("/MonthDiary");
      } else {
        setErrMsg("아이디나 비밀번호가 틀렸습니다");
      }
    },
    [formData, navigate]
  );

  return (
    <Container className={style.login}>
      <button onClick={onBack} className={style.back}>
        ◀️
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
            placeholder="아이디를 입력하세요"
            name="userId"
            value={FormData.userId}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            placeholder="비밀번호를 입력하세요"
            name="userPw"
            value={FormData.userPw}
            onChange={handleChange}
          />
        </Form.Group>

        {errMsg && <Alert variant="danger">{errMsg}</Alert>}

        <Button
          variant="primary"
          type="submit"
          className={style.login_button}
          onClick={onNext}>
          로그인
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
