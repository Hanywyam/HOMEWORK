import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PostingBtn from "../components/post/PostingBtn";
import Header from "../components/Header";
import postingStyle from "../components/post/posting.module.css";

const Posting = () => {
  const navigate = useNavigate();
  const currentDate = new Date().toISOString();
  const [user, setUser] = useState(null);

  const [form, setForm] = useState({
    title: "",
    content: "",
    wdate: currentDate,
  });
  const { title, content, wdate } = form;

  const [diary, setDiary] = useState({
    id: "", // 이 부분에 해당 일기장의 ID를 저장
    title: "",
  });

  useEffect(() => {
    const getUserSession = async () => {
      try {
        const res = await axios.get("/login");
        setUser(res.data.user);
      } catch (error) {
        console.log("세션 정보 가져오기 오류", error);
      }
    };

    getUserSession();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleReset = () => {
    setForm({
      ...form,
      title: "",
      content: "",
      wdate: currentDate,
    });
  };

  const handleDiaryCreate = async () => {
    try {
      const response = await axios.post("/monthDiary/new", {
        title: form.title,
      });
      setDiary({
        id: response.data._id,
        title: form.title,
      });
    } catch (error) {
      console.error("일기장 생성 실패:", error);
    }
  };

  const handleSubmit = useCallback(async () => {
    if (!title || !content) {
      alert("제목이나 내용을 입력하세요");
    } else {
      const reCheck = window.confirm("내용을 저장하시겠습니까?");
      if (reCheck) {
        if (!diary.id) {
          await handleDiaryCreate();
        }

        // 해당 일기장에 일기 생성
        try {
          await axios.post("/posting", {
            title,
            content,
            wdate,
            id: diary.id, // 일기장 ID를 전송
          });

          navigate(`/diary/read/${diary.id}`);
        } catch (error) {
          console.error("일기 작성 실패:", error);
        }
      }
    }
  }, [form, diary, navigate, title, content, wdate, handleDiaryCreate]);

  return (
    <section className={postingStyle.postingWrapper}>
      <Header title="일기 쓰기" />
      <form className={postingStyle.postingForm}>
        <input type="date" name="wdate" value={wdate} onChange={handleChange} />
        <input
          type="text"
          placeholder="제목을 입력하세요"
          name="title"
          value={title}
          onChange={handleChange}
        />
        <textarea
          rows={10}
          placeholder="내용을 입력하세요"
          name="content"
          value={content}
          onChange={handleChange}
        />
      </form>
      <PostingBtn handleSubmit={handleSubmit} handleReset={handleReset} />
    </section>
  );
};

export default Posting;
