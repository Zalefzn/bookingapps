import Users from "../table/users.js";

export const findUserByEmail = async (email) => {
  return await Users.findOne({ where: { email } });
};

export const createUser = async (userData) => {
  return await Users.create(userData);
};
