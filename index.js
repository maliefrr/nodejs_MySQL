import express from "express";
import router from "./routes/router.js";
import db from "./config/db.js";
import expressLayouts from "express-ejs-layouts";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import session from "express-session";
import flash from "connect-flash";

// app initialization
const app = express();

// configure dotenv
dotenv.config({ path: "./config/config.env" });

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
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(expressLayouts);
app.use(
	session({
		secret: process.env.SECRET,
		resave: false,
		saveUninitialized: false,
	})
);
app.use(cookieParser(process.env.SECRET));
app.use(flash());

// connecting to routes
app.use(router);

app.listen(PORT, (err) => {
	console.log(`The app is running at http://localhost:${PORT}`);
});
