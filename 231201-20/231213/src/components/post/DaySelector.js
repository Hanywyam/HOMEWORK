import { useState } from "react";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";
import { getMonth, getDate } from "date-fns";
import "./daySelector.css";

const DaySelector = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <DatePicker
        locale={ko}
        selected={date}
        onChange={(date) => setDate(date)}
        dateFormat="yyyy.MM.dd"
        minDate={new Date()}
        placeholderText="날짜를 선택하세요"
        dayClassName={(d) =>
          getDate(d) === getDate(date) && getMonth(d) === getMonth(date)
            ? "normal-day selected-day"
            : "normal-day"
        }
      />
    </div>
  );
};

export default DaySelector;
