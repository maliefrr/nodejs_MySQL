import todoList from "../models/ListModels.js";

export const getAllList = async (req, res) => {
	const list = await todoList.findAll();
	res.render("home", {
		layout: "layouts/main-layout",
		title: "Home",
		list,
		sucsess: req.flash("sucsess"),
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
		req.flash("sucsess", "Data berhasil ditambahkan");
		res.redirect("/");
	} catch (error) {
		res.json({
			error: error.message,
		});
	}
};

export const getListById = async (req, res) => {
	try {
		const list = await todoList.findAll({
			where: {
				id: req.params.id,
			},
		});
		res.render("editList", {
			layout: "./layouts/main-layout",
			title: "Edit",
			list,
		});
	} catch (error) {
		res.json({
			error: error.message,
		});
	}
};
