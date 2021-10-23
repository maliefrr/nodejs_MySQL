import express from "express";
import { getAllList } from "../controller/ListController.js";

const router = express.Router();

router.get("/", getAllList);

export default router;
