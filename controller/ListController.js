import todoList from "../models/ListModels.js";

export const getAllList = async (req, res) => {
	const list = await todoList.findAll();
	res.render("home", {
		layout: "layouts/main-layout",
		title: "Home",
		list,
	});
};

export const getAddList = (req, res) => {
	res.render("new", {
		layout: "layouts/main-layout",
		title: "Add",
	});
};

export const postAddList = async (req, res) => {
	try {
		const { activities, status } = await req.body;
		await todoList.create({
			activities,
			status,
		});
		res.redirect("/");
	} catch (error) {
		res.json({
			error: error.message,
		});
	}
};
