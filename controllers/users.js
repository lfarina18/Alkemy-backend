const User = require('../models/user');

const usersGet = async (req, res) => {
  const users = await User.findAll();

  res.json({ users });
};

const userGet = async (req, res) => {
  const { id } = req.params;

  const user = await User.findByPk(id);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({
      msg: `There is no user with the id: ${id}`,
    });
  }
};

const usersPost = async (req, res) => {
  const { body } = req;

  try {
    const emailExists = await User.findOne({
      where: {
        email: body.email,
      },
    });

    if (emailExists) {
      return res.status(400).json({
        msg: 'There is already a user with the email ' + body.email,
      });
    }

    const user = User.build(body);
    await user.save();

    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'Talk to the Administrator',
    });
  }
};
const usersPut = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(400).json({
        msg: 'There is no user with the id ' + id,
      });
    }

    await user.update(body);

    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'Talk to the Administrator',
    });
  }
};

const usersDelete = async (req, res) => {
  const { id } = req.params;

  const user = await User.findByPk(id);
  if (!user) {
    return res.status(400).json({
      msg: 'Unable to delete user with id ' + id + ' .Does not exist',
    });
  }

  await user.update({ state: false });

  res.json(user);
};

module.exports = {
  usersGet,
  userGet,
  usersPut,
  usersPost,
  usersDelete,
};
