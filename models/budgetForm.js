const { DataTypes } = require('sequelize');
const db = require('../db/connection');

const BudgetForm = db.define('BudgetForm', {
  concept: {
    type: DataTypes.STRING,
  },
  amount: {
    type: DataTypes.FLOAT,
  },
  type: {
    type: DataTypes.STRING,
  },
  userId: {
    type: DataTypes.INTEGER,
  },
  state: {
    type: DataTypes.BOOLEAN,
  },
});

module.exports = BudgetForm;
