"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const connection_1 = __importDefault(require("./connection"));
const sequelize_1 = require("sequelize");
const User = connection_1.default.sequelize.define("user", {
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
