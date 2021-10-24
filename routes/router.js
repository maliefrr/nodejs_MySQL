import express from "express";
import { getAllList, getAddList, postAddList } from "../controller/ListController.js";

const router = express.Router();

router.get("/", getAllList);
router.get("/add", getAddList);
router.post("/", postAddList);
export default router;
