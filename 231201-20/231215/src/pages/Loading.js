import React from "react";
import style from "../components/home/home.module.css";

const Loading = () => {
  return (
    <div className={style.loading}>
      <img
        src="/images/loading.gif"
        alt="loading"
        className={style.loading_img}
      />
    </div>
  );
};

export default Loading;
