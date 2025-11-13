import { registerUser, loginUser } from "../services/userServices.js";

export const register = async (req, res) => {
  try {
    const newUser = await registerUser(req.body);
    res.status(201).json({
      status: 201,
      message: "User registered successfully",
      data: newUser,
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: error.message,
      data: null,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { token, user } = await loginUser(email, password);
    res.status(200).json({
      status: 200,
      message: "Login successful",
      data: { token, user },
    });
  } catch (error) {
    res.status(401).json({
      status: 401,
      message: error.message,
      data: null,
    });
  }
};

export const profile = async (req, res) => {
  try {
    res.status(200).json({
      status: 200,
      message: "User profile retrieved successfully",
      data: req.user,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error.message,
      data: null,
    });
  }
};
