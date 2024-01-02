import { useState, useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import profileDB from "../db/profileDB";
import viewPostStyle from "../components/post/viewPost.module.css";
import ViewPostModal from "../components/post/ViewPostModal";
import Footer from "../components/Footer";

const ViewPost = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    id: id || "",
    title: "",
    content: "",
    writer: "",
    wdate: "",
  });
  const { id: postId, title, content, wdate } = form || {};

  const getData = async () => {
    try {
      setLoading(true);
      if (id) {
        const result = await axios.get(`/posts/read/${id}`);
        setForm({ ...result.data });
      }
    } catch (error) {
      console.log("읽기 오류: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setForm({
      id: id || "",
      title: "",
      content: "",
      writer: "",
      wdate: "",
    });
    getData();
  }, [id]);

  const newDate = useMemo(() => {
    return new Date(wdate).toLocaleDateString("ko-KR", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
  }, [wdate]);

  // 메뉴 모달창
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  // 프로필 이미지
  const path = process.env.PUBLIC_URL;
  const data = profileDB;

  const randomIndex = Math.floor(Math.random() * data.length);
  const randomProfile = data[randomIndex];
  const randomProfileImage = randomProfile ? path + randomProfile.image : null;

  return (
    <section className={viewPostStyle.ViewPostWrapper}>
      <div className={viewPostStyle.ViewPostContent}>
        {randomProfileImage && (
          <div>
            <img src={randomProfileImage} alt={randomProfile.name} />
            <h3>{randomProfile.name}</h3>
          </div>
        )}
        <span className={viewPostStyle.ViewPostContentDate}>{newDate}</span>
        <span className={viewPostStyle.ViewPostContentCon}>
          <h2>{title}</h2>
          <p>{content}</p>
        </span>
      </div>

      <article>
        <button className={viewPostStyle.ViewPostMenuBtn} onClick={onOpen}>
          메뉴
          <span></span>
          <span></span>
          <span></span>
        </button>
      </article>
      {isOpen && <ViewPostModal onClose={onClose} />}

      <Footer />
    </section>
  );
};

export default ViewPost;