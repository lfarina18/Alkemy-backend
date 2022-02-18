const { Router } = require('express');

const { BudgetFormGet, BudgetFormPost } = require('../controllers/budgetForm');

const router = Router();

router.get('/', BudgetFormGet);

router.post('/', BudgetFormPost);

module.exports = router;
