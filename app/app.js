import express from "express";
import connect from "./connect.js";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./router.js";

const app = express();
const port = 8000;

app.use(bodyParser.json());

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, // 인증 정보를 포함하도록 허용
};

app.use(cors(corsOptions));
app.use("/", router);

app.listen(port, () => {
  console.log(`server is on ${port}`);
});

connect();
