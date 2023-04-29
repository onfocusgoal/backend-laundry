const { Order } = require("../models/Order");

exports.createOrder = async (req, res, next) => {
	const { item } = req.body;

	try {
		const order = await Order.create({ ...item });
		res.status(200).json({ success: true, order });
	} catch (error) {
		next(error);
	}
};

exports.getOrders = async (req, res, next) => {
	const { id } = req.params;
	try {
		const orders = await Order.find({ user_id: id });
		res.status(200).json({ success: true, orders });
	} catch (error) {
		next(error);
	}
};
