const Sequelize = require('sequelize');
const sequelize = require('../control/lib/sequelize');

const ContentResponse = sequelize.define('mobile_members', {
    url: {
        type: Sequelize.STRING,
        allowNull: false
    },
    method: {
        type: Sequelize.ENUM,
        values: ['GET', 'POST'],
        allowNull: false,
        defaultValue: 'POST'
    },
    params: {
        type: Sequelize.STRING,
        defaultValue: '{}',
        allowNull: false,
    },
    response: {
        type: Sequelize.TEXT,
        allowNull: false,
        get() {
            const response = this.getDataValue('response') || '{}';
            return JSON.parse(response);
        },
    }
}, {
    charset: 'utf8mb4'
});

module.exports = ContentResponse;