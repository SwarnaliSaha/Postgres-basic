"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = exports.UserS = void 0;
const connection_1 = require("../../connection/connection");
const sequelize_1 = require("sequelize");
const UserSchema = connection_1.sequelize.define("user", {
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    fullName: {
        type: sequelize_1.DataTypes.STRING,
    }
});
exports.UserSchema = UserSchema;
class UserS extends sequelize_1.Model {
}
exports.UserS = UserS;
UserSchema.sync().then(() => console.log('table created'))
    .catch((e) => console.log(e));
