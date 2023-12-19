const express = require("express");
const app = express();
const mongoose = require("mongoose");
const sha = require("sha256");
const cors = require("cors");

const PORT = 8080;
const URL =
  "mongodb+srv://hanyw:1234@cluster0.to8wb9t.mongodb.net/?retryWrites=true&w=majority";

// sha256 알고리즘
app.use(cors());
app.use(express.json());

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
app.post("/join", async (req, res) => {
  console.log(req.body.userId);
  console.log(req.body.userPw);
  console.log(req.body.userEmail);

  try {
    await mydb.collection("joinNuTTi").insertOne({
      userId: req.body.userId,
      userPw: sha(req.body.userPw),
      userEmail: req.body.userEmail,
    });
    console.log("회원가입 성공");
    res.json({ message: "회원가입 성공" });
  } catch (err) {
    console.log("회원가입 에러: ", err);
    res.status(500).send({ error: err });
  }
});

// 로그인

// 로그아웃

// 포트8080 연결
app.listen(PORT, () => {
  console.log("8080번 포트에서 실행 중");
});
