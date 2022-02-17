const User = require('../models/user');

const emailExists = async (email = '') => {
  const exitsEmail = await User.findOne({
    where: {
      email,
    },
  });

  if (exitsEmail) {
    throw new Error(`There is already a user with the email ${email}`);
  }
};

module.exports = { emailExists };
