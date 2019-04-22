const Sequelize = require('sequelize');
const db = require('../config/database')

//creating a meal model hold all meals in database
const meal = db.define('meal', {
    // attributes
    mealId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    mealName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price:  {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
    },
    restaurantId: {
        type:Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'restaurant',
            key: 'restaurantId', 
        }
    }
  }, {
    // options
  });

  module.exports = meal;