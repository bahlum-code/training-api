const DataTypes = require('sequelize').DataTypes;
const sequelize = require('../db');

const ProductOrder = sequelize.define('ProductOrder', {
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    orderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
});

module.exports = ProductOrder;
