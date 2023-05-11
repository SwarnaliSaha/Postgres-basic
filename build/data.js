"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("./connection"));
const model_1 = require("./model");
connection_1.default.sequelize.authenticate().then(() => console.log("database is connected"))
    .catch((error) => console.log("unable to connect", error));
model_1.User.sync()
    .then(() => {
    model_1.User.create({
        email: "dfgnm",
        fullName: "fkjk"
    });
})
    .then(() => console.log("data is inserted successfully"));
