import express from "express";
import connect from "./connect.js";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./router.js";

const app = express();
const port = 8000;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://dreamgreentour.netlify.app/"
  );
  next();
});

app.use(
  cors({
    origin: "*",
    method: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
    optionsSuccessStatus: 200,
  })
);
app.use("/", router);

app.listen(port, () => {
  console.log(`server is on ${port}`);
});

connect();
