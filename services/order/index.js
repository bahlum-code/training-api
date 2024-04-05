const ProductOrder = require("../../models/ProductOrder");

class OrderService {
    async createOrder(data) {
        try {
            const order = await ProductOrder.bulkCreate(data);
            return { message: "Order created successfully", data: order, statusCode: 200 }
        } catch (error) {
            return { message: "Order could not be created: " + error.message, statusCode: 500 }
        }
    }
}

module.exports = new OrderService();