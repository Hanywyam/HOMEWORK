const iconDB = [
  {
    path: "/",
    component: "Home",
    image: "/images/icon_1home.png",
    alt: "홈",
  },
  {
    path: "/monthDiary/new",
    component: "MonthDiary",
    image: "/images/icon_2diary.png",
    alt: "일기장",
  },
  {
    path: "/my",
    component: null,
    image: "/images/icon_3my.png",
    alt: "my",
  },
  {
    path: "/",
    component: "Login",
    image: "/images/icon_4logout.png",
    alt: "로그아웃",
    logout: true,
  },
];

export default iconDB;