import connection from "./connection";
import { DataTypes } from "sequelize";

const User = connection.sequelize.define("user", {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },

    fullName: {
        type: DataTypes.STRING,
    }
});

export {User};