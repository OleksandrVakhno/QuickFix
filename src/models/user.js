const Sequelize = require('sequelize');
const db = require('../config/database')

//creating a User model to reigter in database
const User = db.define('user', {
    // attributes
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false
      },
    address:{
      type:Sequelize.STRING,
      allowNull: false
    },
    phone:{
      type:Sequelize.STRING,
      allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }/*,
    organization: {
        type:Sequelize.STRING,
        allowNull: true
    },
    points: {
      type:Sequelize.INTEGER,
      allowNull: true
    },
    lastMeal: {
      type:Sequelize.INTEGER,
      allowNull: true
    }*/
  }, {
    // options
  });

  module.exports = User;