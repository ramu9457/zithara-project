import { Sequelize } from 'sequelize';





const db = new Sequelize('vinay', 'postgres', '1234', {        
    dialect: 'postgres',
    host: 'localhost',
    port: 5433,
    schema: 'varma',
   
});


export default db;