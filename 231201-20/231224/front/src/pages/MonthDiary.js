import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MonthItem from "../components/months/MonthItem";
import monthlyStyle from "../components/months/months.module.css";
import axios from "axios";

const MonthDiary = () => {
  const { _id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const param_page = search.get("page");
  const page = param_page === null ? 1 : Number(param_page);

  const [monthlyDiary, setMonthlyDiary] = useState([]);
  const [form, setForm] = useState({ _id: _id || "", title: "" });

  useEffect(() => {
    const getData = async () => {
      try {
        if (_id) {
          const result = await axios.get(
            `/monthDiary/read/${_id}`,
            monthlyDiary
          );
          setMonthlyDiary(result.data);
          console.log("result", result);
          console.log("monthlyDiary", monthlyDiary);
        }
      } catch (error) {
        console.error("데이터 가져오기 실패:", error);
      }
    };
    console.log("일기장 데이터", monthlyDiary);
    getData();
  }, [_id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.title) {
      alert("내용을 입력하세요.");
    } else {
      const reCheck = window.confirm("내용을 저장하시겠습니까?");
      if (reCheck) {
        await axios.post("/monthDiary/new", form);
        // navigate(`/monthDiary/${form.title}`);
        window.confirm("일기장이 생성되었습니다.");
      }
    }
  };

  const handleDeleteMonth = () => {};

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
        <button className={monthlyStyle.monthlyInputBtn}>월 추가</button>
      </form>

      <MonthItem
        monthlyDiary={monthlyDiary}
        onSelect={handleSubmit}
        onDelete={handleDeleteMonth}
      />
      <Footer />
    </div>
  );
};

export default MonthDiary;
