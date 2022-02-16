const { DataTypes } = require('sequelize');
const { db } = require('../db/connection');

const User = db.define('User', {
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  state: {
    type: DataTypes.BOOLEAN,
  },
});

module.exports = User;
