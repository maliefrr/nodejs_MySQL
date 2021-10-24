import express from "express";
import { getAllList, getAddList, postAddList, getListById } from "../controller/ListController.js";

const router = express.Router();

router.get("/", getAllList);
router.get("/add", getAddList);
router.post("/", postAddList);
router.get("/edit/:id", getListById);
export default router;
