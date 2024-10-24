const bcrypt = require("bcrypt");
const saltRounds = 10;

const hashPassowrd = async (password) => {
  return bcrypt.hash(password, saltRounds);
};

module.exports = {
  hashPassowrd,
};
