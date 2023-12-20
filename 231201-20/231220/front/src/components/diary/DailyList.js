import { Link, useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import diaryStyle from "./diary.module.css";
import DailyItem from "./DailyItem";

const DailyList = ({ postList }) => {
  return (
    <div className={diaryStyle.diaryWrap}>
      <Link to="/posting" className={diaryStyle.addBtn}>
        일기 작성
      </Link>

      <ul>
        {postList.map((diary, index) => (
          <Link to={`viewPost/${index}`}>
            <li className={diaryStyle.diaryList} key={index}>
              <DailyItem />
              <article>
                <div>
                  <h3>{diary.title.slice(0, 10)}...</h3>
                  <span>{diary.date}</span>
                </div>
                <span>{diary.content.slice(0, 40)}...</span>
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
