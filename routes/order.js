const { createOrder, getOrders } = require("../controllers/order");
const { protect } = require("../middleware/protect");

const router = require("express").Router();

router.route("/order").post(protect, createOrder);
router.route("/order/:id").get(protect, getOrders);

module.exports = router;
