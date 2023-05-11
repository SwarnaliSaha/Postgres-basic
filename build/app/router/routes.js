"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = void 0;
const response_handler_1 = require("../utility/response-handler");
const router_data_1 = require("./router.data");
const express_1 = require("express");
const registerRoutes = (app) => {
    app.use((0, express_1.json)());
    // app.use(authorize(excludedPaths));
    for (let route of router_data_1.routes) {
        app.use(route.path, route.router);
    }
    app.use((err, req, res, next) => {
        res.status(err.statusCode || 500).send(new response_handler_1.ResponseHandler(null, err));
    });
};
exports.registerRoutes = registerRoutes;
