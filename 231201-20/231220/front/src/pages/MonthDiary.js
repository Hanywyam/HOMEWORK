import { useCallback, useEffect, useState } from "react";
import Header from "../components/Header";
import MonthItem from "../components/months/MonthItem";
import monthlyStyle from "../components/months/months.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const MonthDiary = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const param_page = search.get("page");
  const page = param_page === null ? 1 : Number(param_page);

  const [monthlyDiary, setMonthlyDiary] = useState([]);
  const [form, setForm] = useState({
    id: "",
    title: "",
  });

  const getData = async () => {};

  useEffect(() => {}, []);

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
        await axios.post("/monthDiary", form);
        navigate(`/monthDiary/${form.title}`);
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
    </div>
  );
};

export default MonthDiary;
