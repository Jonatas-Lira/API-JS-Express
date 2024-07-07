import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const Product = sequelize.define(
    'Product',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        value: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    },
    {
        tableName: "Product",
        timestamps: false, // Isso desativa createdAt, updatedAt e deletedAt
    }
);

export default Product;
