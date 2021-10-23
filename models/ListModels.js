import { Sequelize } from "sequelize";
import db from "../config/db.js";

const { DataTypes } = Sequelize;

const todoList = db.define("todoList", {
	activities: {
		type: DataTypes.STRING,
	},
	status: {
		type: DataTypes.BOOLEAN,
	},
});

export default todoList;
