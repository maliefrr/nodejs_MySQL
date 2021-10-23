import express from "express";
import router from "./routes/router.js";

// app initialization
const app = express();

// initializing port

const PORT = process.env.port || 5000;

// connecting to routes
app.use(router);

app.listen(PORT, (err) => {
	console.log(`The app is running at http://localhost:${PORT}`);
});
