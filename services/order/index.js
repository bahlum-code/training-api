const ProductOrder = require("../../models/ProductOrder");

class OrderService {
    async createOrder(data) {
        const order = await ProductOrder.bulkCreate(data);
        return order
    }
}

module.exports = new OrderService();