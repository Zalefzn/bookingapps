import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { findUserByEmail, createUser } from "../repository/userRepository.js";

export const registerUser = async (data) => {
  const { name, email, password, role } = data;

  const existingUser = await findUserByEmail(email);
  if (existingUser) {
    throw new Error("Email already registered");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await createUser({
    name,
    email,
    password: hashedPassword,
    role: role || "user",
  });

  return newUser;
};

export const loginUser = async (email, password) => {
  const user = await findUserByEmail(email);
  if (!user) throw new Error("User not found");

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) throw new Error("Invalid password");

  const token = jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    process.env.JWT_SECRET || "mysecret",
    { expiresIn: "1d" }
  );

  return { token, user };
};
