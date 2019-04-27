const Sequelize = require('sequelize');
const db = require('../config/database')

//creating a restaurant model to save restaurant details to identify where the meal is from
const restaurant = db.define('restaurant', {
    // attributes
    restaurantId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    restaurantName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    restaurantDesc: {
        type: Sequelize.STRING,
        allowNull: false
    },
    backgroungImg: {
        type: Sequelize.STRING,
        allowNull: false
    }
  }, {
    // options
  });

  module.exports = restaurant;