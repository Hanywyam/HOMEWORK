import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import diaryStyle from "./diary.module.css";

const DailyList = ({ postList }) => {
  const navigate = useNavigate();
  const goMonth = () => navigate("/diary/:monthParam");

  return (
    <div className={diaryStyle.diaryWrap}>
      <Link to="/posting" className="addBtn">
        일기 작성
      </Link>

      <button className="inputBtn" onClick={goMonth}>
        일기장으로
      </button>
      <ul>
        {postList.map((diary, index) => (
          <li className={diaryStyle.diaryList} key={index}>
            <Link to={`viewPost/${index}`}>{diary.title}</Link>
            <span>{diary.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  postList: state.post.postList,
});

export default connect(mapStateToProps)(DailyList);
