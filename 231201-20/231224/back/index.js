const express = require("express");
const mongoose = require("mongoose");
const app = express();
const sha = require("sha256");
const cors = require("cors");
const session = require("express-session");

app.use(
  session({
    secret: "dges1csdggh1234ts5fsh2",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(cors());
app.use(express.json());

const PORT = 8080;
const URL =
  "mongodb+srv://hanyw:1234@cluster0.to8wb9t.mongodb.net/db1?retryWrites=true&w=majority";

// mongoDB 연결
let mydb;
mongoose
  .connect(URL, { dbName: "db1" })
  .then(() => {
    console.log("MongoDB에 연결되었습니다.");
    mydb = mongoose.connection.db;
  })
  .catch((err) => {
    console.log("MongoDB 연결 실패: ", err);
  });

// 회원가입
app.post("/signup", async (req, res) => {
  console.log(req.body.userId);
  console.log(req.body.userPw);
  console.log(req.body.userEmail);

  try {
    await mydb.collection("account").insertOne({
      userId: req.body.userId,
      userPw: sha(req.body.userPw),
      userEmail: req.body.userEmail,
    });
    console.log("회원가입 성공");
    res.json({ message: "회원가입 성공" });
  } catch (err) {
    console.log("회원가입 에러: ", err);
    res.send({ error: err });
    res.status(500).send({ error: err });
  }
});

// 로그인 :유지
const checkUserSession = (req, res) => {
  if (req.session.user) {
    console.log("세션 유지");
    res.json({ user: req.session.user });
  } else {
    res.json({ user: null });
  }
};

app.get("/login", checkUserSession);
app.get("/", checkUserSession);

// 로그인 :값 확인
app.post("/login", async (req, res) => {
  const { userId, userPw } = req.body;
  console.log("id:", userId);
  console.log(`pw: ${userPw}`);

  try {
    const result = await mydb.collection("account").findOne({ userId });
    if (!result) {
      return res.json({ err: "아이디를 찾을 수 없습니다." });
    } else if (result.userPw && result.userPw === sha(userPw)) {
      req.session.user = { userId, userPw };
      console.log("새로운 로그인");
      res.json({ user: req.session.user });
    } else {
      return res.json({ err: "비밀번호가 틀렸습니다." });
    }
  } catch (err) {
    console.log("로그인 에러: ", err);
    res.status(500).json({ err: "서버 오류" });
  }
});

// 로그아웃
app.get("/logout", (req, res) => {
  console.log("로그아웃");
  req.session.destroy();

  res.json({ user: null });
});

// MonthDiary 스키마 정의
const monthlySchema = new mongoose.Schema({
  id: String,
  title: String,
});

const MonthDiaries = mongoose.model("MonthDiaries", monthlySchema);

// 일기장 생성
app.post("/monthDiary/new", async (req, res) => {
  const { id, title } = req.body;
  try {
    const newMDiary = new MonthDiaries({ id, title });
    await newMDiary.save();
    res.sendStatus(200);
  } catch (err) {
    console.log("작성 오류: ", err);
    res.status(500).send("서버 작성 오류");
  }
});

// 일기장 목록 가져오기
app.get("/monthDiary/list", async (req, res) => {
  try {
    const diaryList = await MonthDiaries.findOne({}).lean();
    res.json(diaryList);
  } catch (error) {
    console.log("일기장 목록 가져오기 오류: ", error);
    res.status(500).send("일기장 목록을 가져오는데 문제가 발생했습니다.");
  }
});

// 일기장 데이터 가져오기
app.get("/monthDiary/read/:id", async (req, res) => {
  const postId = req.params.id;
  console.log(postId);

  try {
    const post = await MonthDiaries.findOne({ _id: postId }).lean();
    if (!post) {
      return res.status(404).json({ error: "내용을 찾을 수 없습니다" });
    }
    res.json(post);
  } catch (error) {
    console.log("읽기 오류: ", error);
    res.status(500).send("서버 읽기 오류");
  }
});

// 포트8080 연결
app.listen(PORT, () => {
  console.log("8080번 포트에서 실행 중");
});
