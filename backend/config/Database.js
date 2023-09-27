import { Sequelize } from "sequelize";
// const Sequelize = require('sequelize')
 
const db = new Sequelize('auth_db', 'root', 'root', {
    host: "172.17.0.1",
    dialect: "mysql"
});

 
export default db;