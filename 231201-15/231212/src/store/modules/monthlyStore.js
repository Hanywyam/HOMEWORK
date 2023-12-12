// monthlyStore.js
// 액션 타입 정의
const ADD_MONTH = "monthly/ADD_MONTH";
const SET_NEW_MONTH = "monthly/SET_NEW_MONTH";
const SELECT_MONTH = "monthly/SELECT_MONTH";

// 액션 생성자 정의
export const addMonth = (newMonth) => ({
  type: ADD_MONTH,
  payload: newMonth,
});

export const setNewMonth = (newMonth) => ({
  type: SET_NEW_MONTH,
  payload: newMonth,
});

export const selectMonth = (selectedMonth) => ({
  type: SELECT_MONTH,
  payload: selectedMonth,
});

const initialState = {
  monthlyDiary: [],
  selectData: null,
  newMonth: "",
};

// 리듀서 설정
const monthly = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MONTH:
      return {
        ...state,
        monthlyDiary: [...state.monthlyDiary, { 월: action.payload }],
      };

    case SET_NEW_MONTH:
      return {
        ...state,
        newMonth: action.payload,
      };

    case SELECT_MONTH:
      const selectedData = state.monthlyDiary.find(
        (diary) => diary.월 === action.payload
      );
      return {
        ...state,
        selectData: selectedData,
      };

    default:
      return state;
  }
};

// 리듀서 함수 보내기
export default monthly;
