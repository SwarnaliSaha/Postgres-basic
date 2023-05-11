import { Sequelize } from "sequelize";

const sequelize = new Sequelize('demo', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres' 
  });


export default {sequelize}