import React, { useState } from "react";

const DiaryApp = () => {
  // 상태 정의
  const [diaryList, setDiaryList] = useState([]);
  const [newDiary, setNewDiary] = useState({
    title: "",
    content: "",
    date: "",
  });

  // 입력 양식 변경 시 처리
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDiary((prevDiary) => ({ ...prevDiary, [name]: value }));
  };

  // 일기 추가 처리
  const handleAddDiary = () => {
    if (newDiary.title && newDiary.content && newDiary.date) {
      setDiaryList((prevDiaries) => [...prevDiaries, newDiary]);
      setNewDiary({ title: "", content: "", date: "" });
    }
  };

  return (
    <div>
      <h1>Diary App</h1>

      {/* 일기 입력 양식 */}
      <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={newDiary.title}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Content:</label>
        <textarea
          name="content"
          value={newDiary.content}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={newDiary.date}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={handleAddDiary}>Add Diary</button>

      {/* 일기 목록 출력 */}
      <div>
        <h2>Diary List</h2>
        <ul>
          {diaryList.map((diary, index) => (
            <li key={index}>
              <strong>{diary.title}</strong> - {diary.content} ({diary.date})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DiaryApp;
