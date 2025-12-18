import { sequelize } from "../config/database.mjs";
import { DataTypes } from "sequelize";

export const User = sequelize.define('user', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});