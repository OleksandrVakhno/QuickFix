const Sequelize = require('sequelize');
const db = require('../config/database')

//creating an order model to store order history for each user in database
const order = db.define('order', {
    // attributes
    orderId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'user', // refers to 'user' table
            key: 'userId', // refers to column name in user table
        }
    },
    mealId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'meal', // refers to 'meal' table
            key: 'mealId', // refers to mealdId column
        }
    },
  }, {
    // options
  });

  module.exports = order;