import express from "express";
import { login, register } from "./UserController.js";
import {
  ChungCheong,
  GyeongGi,
  GyeongSang,
  Jeju,
  Jeonla,
  KangWon,
  Seoul,
  write,
} from "./ReviewController.js";

const router = express.Router();
console.log("접근");
router.post("/register", register);
router.post("/login", login);
router.post("/write", write);
router.get("/review/Seoul", Seoul);
router.get("/review/KangWon", KangWon);
router.get("/review/Jeonla", Jeonla);
router.get("/review/Jeju", Jeju);
router.get("/review/GyeongSang", GyeongSang);
router.get("/review/GyeongGi", GyeongGi);
router.get("/review/ChungCheong", ChungCheong);

export default router;
