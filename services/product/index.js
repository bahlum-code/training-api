const Product = require("../../models/Product");

class ProductService {
    async fetchAll() {
        const products = await Product.findAll();
        return products;
    }

    async addProductsToDB() {
        const checkProducts = await Product.findAll();

        if (checkProducts.length) {
            return{
                message: "Products already exist in DB",
                data: checkProducts,
                alreadyExist: true,
            };
        }

        const products = Array.from({ length: 20 }, (_, index) => ({
            name: `Product ${index + 1}`,
            imageSrc: `https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-0${index}.jpg`,
            imageAlt: `Front of Product ${index + 1}`,
            price: Math.floor(Math.random() * 100) + 20, // Random price between $20 and $120
            color: "#" + Math.floor(Math.random() * 16777215).toString(16), // Random hex color
            colorId: Math.floor(Math.random() * 10) + 1, // Random color ID between 1 and 10
        }));

        await Product.bulkCreate(products);

        return products;
    }
}

module.exports = new ProductService();
