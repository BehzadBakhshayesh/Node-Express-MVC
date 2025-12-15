import { sequelize } from "../config/database.mjs";
import { DataTypes } from "sequelize";

export const Article = sequelize.define('article', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    text: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
});