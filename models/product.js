const DataTypes = require('sequelize').DataTypes;
const sequelize = require('../db');

const Product = sequelize.define('Product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    imageSrc: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    imageAlt: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Product;