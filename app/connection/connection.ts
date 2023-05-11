import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('demo', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres' 
  });

export const connectToPostgres = async() => {
    try {
        await sequelize.authenticate();
        console.log("Connection successful");
        return true;
    } 
    catch (error) {
        console.log("Connection failed");
        throw {message:"Connection error",error:error}
    }
}

// export default sequelize;