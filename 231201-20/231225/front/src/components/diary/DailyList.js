import { Link, useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import diaryStyle from "./diary.module.css";
import DailyItem from "./DailyItem";

const DailyList = ({ postList }) => {
  const path = process.env.PUBLIC_URL;

  return (
    <div className={diaryStyle.diaryWrap}>
      <Link to="/posting" className={diaryStyle.addBtn}>
        일기 작성
      </Link>

      {postList.length === 0 ? (
        <div className={diaryStyle.backgroundImage}>
          <img src={path + "/images/empty.png"} alt="" />
          <h2>일기가 없어요.<br />일기를 추가해 주세요.</h2>
        </div>
      ) : (
        <ul>
          {postList.map((diary, index) => (
            <Link to={`viewPost/${index}`}>
              <li className={diaryStyle.diaryList} key={index}>
                <DailyItem />
                <article>
                  <div>
                    <h3>{diary.title.slice(0, 8)}</h3>
                    <span>{diary.date}</span>
                  </div>
                  <span>{diary.content.slice(0, 40)}</span>
                </article>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  postList: state.post.postList,
});

export default connect(mapStateToProps)(DailyList);
