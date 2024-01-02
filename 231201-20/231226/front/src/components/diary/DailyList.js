import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import diaryStyle from "./diary.module.css";
import DailyItem from "./DailyItem";

const DailyList = () => {
  const path = process.env.PUBLIC_URL;

  const [posts, setPosts] = useState([]);

  const getData = async () => {
    try {
      const result = await axios.get("/posts");
      const postsNo = result.data.docs.map((post, index) => ({
        ...post,
        no: index,
      }));

      // 데이터
      setPosts(postsNo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={diaryStyle.diaryWrap}>
      <Link to="/diary/posting" className={diaryStyle.addBtn}>
        일기 작성
      </Link>

      {posts.length === 0 ? (
        <div className={diaryStyle.backgroundImage}>
          <img src={path + "/images/empty.png"} alt="" />
          <h2>
            일기가 없어요.
            <br />
            일기를 추가해 주세요.
          </h2>
        </div>
      ) : (
        <ul>
          {posts.map((post) => (
            <li className={diaryStyle.diaryList} key={post._id}>
              <Link to={`/diary/read/${post._id}`} key={post._id}>
                <DailyItem />
                <article>
                  <div>
                    <h3>{post.title.slice(0, 10)}...</h3>
                    <span>
                      {new Date(post.wdate).toLocaleDateString({
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <span>{post.content.slice(0, 40)}...</span>
                </article>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DailyList;
