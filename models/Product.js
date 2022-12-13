const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Product extends Model {}

Product.init(
	{
		// define columns
		id: {
			type: DataTypes.INTEGER,
			allowNul: false,
			primaryKey: true,
			autoIncrement: true,
		},
		product_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		price: {
			type: DataTypes.DECIMAL(10, 2),
			allowNull: false,
			validate: {
				isDecimal: true,
			},
		},
		stock: {
			type: DataTypes.INTEGER,
			allowNul: false,
			defaultValue: 10,
			validate: {
				isNumeric: true,
			},
		},
		category_id: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'category',
				key: 'id',
			},
		},
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: 'product',
	}
);

module.exports = Product;
