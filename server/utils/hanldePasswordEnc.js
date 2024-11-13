const bcrypt = require("bcrypt");
const saltRounds = 10;

const hashPassowrd = async (password) => {
  return bcrypt.hash(password, saltRounds);
};

const comparePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};
module.exports = {
  hashPassowrd,
  comparePassword,
};