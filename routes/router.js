import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
	res.send("sucsess");
});

export default router;
