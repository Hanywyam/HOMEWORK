import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import Header from "../Header";
import editStyle from "./editPost.module.css";

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    content: "",
    wdate: new Date().toISOString(),
  });
  const { title, content, wdate } = form;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleUpdatePost = async () => {
    if (!title || !content) {
      alert("제목이나 내용을 입력하세요");
    } else {
      if (window.confirm("내용을 수정하시겠습니까?")) {
        await axios.post("/diary/update", { id, ...form });
        navigate(-1);
      }
    }
  };

  const getData = async () => {
    const result = await axios.get(`/diary/read/${id}`);
    setForm(result.data);
  };

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <>
      <Header />
      <section>
        <div className={editStyle.editPostWrapper}>
          <input
            type="date"
            name="wdate"
            value={wdate}
            onChange={handleChange}
          />
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
          />
          <textarea
            row={10}
            name="content"
            value={content}
            onChange={handleChange}
          />

          {/* 수정 버튼 */}
          <div>
            <button onClick={handleUpdatePost}>완료</button>
            {/* <button variant="secondary" onClick={() => getData()}>
              취소
            </button> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default EditPost;
