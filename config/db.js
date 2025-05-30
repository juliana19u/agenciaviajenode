import Sequelize from 'sequelize';

const db = new Sequelize('agenciaviajes', 'Valentina', '1022948619VC*', {
    host: 'database-ceetttttt.mysql.database.azure.com',
    port: '3306',
    dialect: 'mysql',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false // This is important for self-signed certificates
        }
    },
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
});

export default db;