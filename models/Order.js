const { Schema, model } = require("mongoose");

const orderSchema = Schema(
	{
		user_id: { type: String, required: true },
		deliveryType: { type: String },
		size: { type: String },
		instructions: { type: String },
		category_id: { type: String },
		product: { type: String },
		price: { type: String },
	},
	{
		timestamps: true,
	},
);

exports.Order = model("Order", orderSchema);
