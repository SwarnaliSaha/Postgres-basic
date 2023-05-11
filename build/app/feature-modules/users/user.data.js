"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_schema_1 = require("./user.schema");
user_schema_1.UserSchema.sync()
    .then(() => {
    user_schema_1.UserSchema.create({
        email: "abc",
        fullName: "abc"
    });
})
    .then(() => console.log("data is inserted successfully"));
