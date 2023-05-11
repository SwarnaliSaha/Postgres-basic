import express from "express";
import { connectToPostgres } from "./connection/connection";
import { registerRoutes } from "./router/routes";

export const startServer = async() =>{
    try {
        const app = express();
        await connectToPostgres();

        registerRoutes(app)
        
        const {PORT} = process.env;
        app.listen(PORT||3000,()=>console.log(`server listening on port ${PORT||3000}`));
    } 
    catch (error) {
        console.log("Could not start the server");
        process.exit(1);
    }
}