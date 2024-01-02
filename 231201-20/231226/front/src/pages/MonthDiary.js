import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MonthItem from "../components/months/MonthItem";
import monthlyStyle from "../components/months/months.module.css";
import diaryDB from "../db/diaryDB";
import axios from "axios";

const MonthDiary = () => {
  const { _id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const param_page = search.get("page");
  const page = param_page === null ? 1 : Number(param_page);
  const path = process.env.PUBLIC_URL;

  const [monthlyDiary, setMonthlyDiary] = useState([]);
  const [form, setForm] = useState({ _id: _id || "", title: "" });

  useEffect(() => {
    const fetchMonthlyDiary = async () => {
      try {
        const response = await axios.get("/monthDiary/list");
        // 서버로부터 받는 데이터가 배열인지 확인 후 상태 업데이트
        setMonthlyDiary(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error("데이터 가져오기 실패:", error);
      }
    };

    fetchMonthlyDiary();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.title) {
      alert("내용을 입력하세요.");
    } else {
      try {
        const randomImageIndex = Math.floor(Math.random() * diaryDB.length);
        const randomImage = diaryDB[randomImageIndex].image;

        const result = await axios.post("/monthDiary/new", {
          title: form.title,
          image: randomImage,
        });

        setMonthlyDiary((prevMonthlyDiary) => [
          ...prevMonthlyDiary,
          {
            _id: result.data._id,
            title: form.title,
            image: randomImage,
          },
        ]);

        setForm({ _id: "", title: "" });

        window.confirm("일기장이 생성되었습니다.");
      } catch (error) {
        console.error("일기장 추가 실패:", error);
      }
    }
  };

  const handleDeleteMonth = async (id) => {
    try {
      const response = await axios.delete(`/monthDiary/delete/${id}`);
      if (response.status === 200) {
        // 상태 업데이트로 UI에서 해당 항목을 제거
        setMonthlyDiary((prevMonthlyDiary) =>
          prevMonthlyDiary.filter((diary) => diary._id !== id)
        );

        alert("일기장이 삭제되었습니다.");
      } else {
        // 서버가 오류 메시지와 함께 응답을 보낸 경우
        alert(`삭제 실패: ${response.data.message}`);
      }
    } catch (error) {
      console.error("일기장 삭제 실패:", error);
      alert("일기장 삭제 중 오류가 발생했습니다.");
    }
  };

  const handleSelectMonth = (id) => {
    navigate(`/diary/${id}`);
  };

  return (
    <div className={monthlyStyle.monthlyWrap}>
      <Header title="일기장" />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="일기장 추가"
        />
        <button type="submit" className={monthlyStyle.monthlyInputBtn}>
          월 추가
        </button>
      </form>

      {monthlyDiary.length === 0 ? (
        <div className={monthlyStyle.backgroundImage}>
          <img src={path + "/images/empty.png"} alt="" />
          <h2>
            일기장이 없어요.
            <br />
            일기장을 추가해 주세요.
          </h2>
        </div>
      ) : (
        <MonthItem
          monthlyDiary={monthlyDiary}
          onSelect={handleSelectMonth}
          onDelete={handleDeleteMonth}
        />
      )}
      <Footer />
    </div>
  );
};

export default MonthDiary;
