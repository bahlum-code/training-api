const ProductOrder = require("../../models/productorder");

class OrderService {
    async createOrder(data) {
        const order = await ProductOrder.bulkCreate(data);
        return order
    }
}

module.exports = new OrderService();