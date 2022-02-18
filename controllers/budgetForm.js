const BudgetForm = require('../models/budgetForm');

const BudgetFormGet = async (req, res) => {
  const data = await BudgetForm.findAll();

  res.json({ data });
};

const BudgetFormPost = async (req, res) => {
  const { concept, amount, type, userId } = req.body;

  const budgetForm = new BudgetForm({ concept, amount, type, userId });

  BudgetForm.build(budgetForm);

  await budgetForm.save();

  res.json(budgetForm);
};

module.exports = {
  BudgetFormGet,
  BudgetFormPost
};
