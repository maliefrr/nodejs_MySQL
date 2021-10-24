import todoList from "../models/ListModels.js";

export const getAllList = async (req, res) => {
	const list = await todoList.findAll();
	res.render("home", {
		layout: "layouts/main-layout",
		title: "Home",
		list,
	});
};

export const addList = (req, res) => {
	res.render("new", {
		layout: "layouts/main-layout",
		title: "Add",
	});
};
