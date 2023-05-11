"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const connection_1 = require("../../connection/connection");
const sequelize_1 = require("sequelize");
const User = connection_1.sequelize.define("user", {
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    fullName: {
        type: sequelize_1.DataTypes.STRING,
    }
});
exports.User = User;
