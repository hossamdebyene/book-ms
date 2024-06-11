const {
  updateOrderController,
  changeOrderStatusController,
} = require("./update");
const {
  getOrdersControllers,
  getOrdersByUserId,
  getOrdersByCriteriaController,
} = require("./get");
const { addOrderController } = require("./add");

module.exports = {
  updateOrderController,
  changeOrderStatusController,
  getOrdersControllers,
  getOrdersByUserId,
  getOrdersByCriteriaController,
  addOrderController,
};
