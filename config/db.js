import { Sequelize } from "sequelize";

const db = new Sequelize("react_todolist", "root", "", {
	host: "localhost",
	dialect: "mysql",
});

export default db;
