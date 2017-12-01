const Sequelize = require('server/control/lib/sequelize');
const config = require("../../config/db.config.json");

const sequelize = new Sequelize(config.database, config.user, config.password, {
    host: config.host,
    dialect: config.protocol,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
    operatorsAliases: false
});

module.exports = sequelize;