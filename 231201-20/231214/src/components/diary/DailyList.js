import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import diaryStyle from "./diary.module.css";
import DailyItem from "./DailyItem";
import Header from "../Header";

const DailyList = ({ postList }) => {
  const navigate = useNavigate();
  const goMonth = () => navigate("/diary/:monthParam");

  return (
    <div className={diaryStyle.diaryWrap}>
      <Header />
      <Link to="/posting" className="addBtn">
        일기 작성
      </Link>

      <button className="inputBtn" onClick={goMonth}>
        일기장으로
      </button>
      <ul>
        {postList.map((diary, index) => (
          <Link to={`viewPost/${index}`}>
            <li className={diaryStyle.diaryList} key={index}>
              <DailyItem />
              <article>
                <div>
                  <h3>{diary.title}</h3>
                  <span>{diary.date}</span>
                </div>
                <span>{diary.content}</span>
              </article>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  postList: state.post.postList,
});

export default connect(mapStateToProps)(DailyList);
