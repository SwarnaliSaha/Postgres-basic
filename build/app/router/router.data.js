"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const router_type_1 = require("./router.type");
const index_1 = __importDefault(require("../feature-modules/index"));
exports.routes = [
    new router_type_1.Route('/user', index_1.default.UserRouter)
];
