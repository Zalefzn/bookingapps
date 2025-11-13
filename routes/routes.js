import express from "express";
import { register, login, profile } from "../controller/usersController.js";
import {
  getBookings,
  getBooking,
  createBooking,
  updateBooking,
  deleteBooking,
} from "../controller/bookingsController.js";
import {
  getFields,
  getField,
  createField,
  updateField,
  deleteField,
} from "../controller/fieldsController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// Auth routes
router.post("/register", register);
router.post("/login", login);
router.get("/profile", authMiddleware, profile);

// Booking routes
router.get("/bookings", authMiddleware, getBookings);
router.get("/bookings/:id", authMiddleware, getBooking);
router.post("/bookings", authMiddleware, createBooking);
router.put("/bookings/:id", authMiddleware, updateBooking);
router.delete("/bookings/:id", authMiddleware, deleteBooking);

// Field routes
router.get("/fields", authMiddleware, getFields);
router.get("/fields/:id", authMiddleware, getField);
router.post("/fields", authMiddleware, createField);
router.put("/fields/:id", authMiddleware, updateField);
router.delete("/fields/:id", authMiddleware, deleteField);

export default router;
