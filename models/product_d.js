"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Order, {
        through: "ProductOrders",
        as: "orders",
        foreignKey: "productId",
        otherKey: "orderId",
      });
      // define association here
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      imageSrc: DataTypes.STRING,
      imageAlt: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      color: DataTypes.STRING,
      colorId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
