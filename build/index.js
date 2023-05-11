"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app/app");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
(0, app_1.startServer)();
