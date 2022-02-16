const { Router } = require('express');
const {
  usersGet,
  userGet,
  usersPut,
  usersPost,
  usersDelete,
} = require('../controllers/users');

const router = Router();

router.get('/', usersGet);
router.get('/:id', userGet);
router.post('/', usersPost);
router.put('/:id', usersPut);
router.delete('/:id', usersDelete);

module.exports = router;
