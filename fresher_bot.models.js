import { DataTypes } from "sequelize";
import db from "../config/db.js";
const dummy_details = db.define("lob_dummy_details", {
    S_no: {
       type: DataTypes.INTEGER,
       primaryKey: true,
       autoIncrement: true,
    },
    Customer_Name: {
       type: DataTypes.STRING,
       allowNull: false,
    },
    Age: {
       type: DataTypes.STRING,
       allowNull: false,
    },
    Phone_Number: {
       type: DataTypes.INTEGER,
       allowNull: false,
    },
    Location: {
        type: DataTypes.STRING,
        allowNull: false,
     },
 
 });
 
 export default dummy_details;  