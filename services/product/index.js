const Product = require("../../models/product");

class ProductService {
    async fetchAll() {
        try {
            const products = await Product.findAll();
            return { message: "Products fetched successfully", data: products, statusCode: 200 };
        } catch (error) {
            return { message: "Products could not be fetched: " + error.message, statusCode: 500 };
        }
    }
}

module.exports = new ProductService();
