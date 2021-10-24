import express from "express";
import router from "./routes/router.js";
import db from "./config/db.js";
import expressLayouts from "express-ejs-layouts";

// app initialization
const app = express();

// initializing port
const PORT = process.env.port || 5000;

// database connecttion
try {
	db.authenticate();
	console.log("Database Connected....");
} catch (error) {
	console.error(error);
}

// middleware
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(expressLayouts);

// connecting to routes
app.use(router);

app.listen(PORT, (err) => {
	console.log(`The app is running at http://localhost:${PORT}`);
});
