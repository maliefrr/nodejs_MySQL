import express from "express";
import { getAllList, addList } from "../controller/ListController.js";

const router = express.Router();

router.get("/", getAllList);
router.get("/add", addList);
export default router;
