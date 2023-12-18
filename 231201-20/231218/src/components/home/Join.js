import { useCallback, useEffect, useRef, useState } from "react";
import { Container, Button, Form, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import style from "./home.module.css";

const Join = () => {
  const storageUserList = JSON.parse(localStorage.getItem("user")) || [];
  const no = useRef(storageUserList.length + 1);

  const [user, setUser] = useState(storageUserList);
  const [msg, setMsg] = useState("가입 확인");
  const [isShow, setIsShow] = useState(false);
  const [formData, setFormData] = useState({
    userId: "",
    userPw: "",
    userEmail: "",
  });
  const { userId, userPw, userEmail } = formData;

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const isChkId = storageUserList.find((user) => user.userId === userId);

    if (isChkId) {
      setMsg("이미 가입된 아이디입니다");
      setIsShow(true);
      return;
    }

    const newUser = {
      id: no.current++,
      userId,
      userPw,
      userEmail,
    };

    setUser((prevData) => [...prevData, newUser]);

    setFormData({
      userId: "",
      userPw: "",
      userEmail: "",
    });

    alert("회원가입 성공");
  };

  const navigate = useNavigate();
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
            placeholder="아이디를 입력하세요"
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

        {isShow && <Alert variant="danger">{msg}</Alert>}

        <Button variant="primary" type="submit" className={style.join_button}>
          회원가입
        </Button>
      </Form>
    </Container>
  );
};

export default Join;
