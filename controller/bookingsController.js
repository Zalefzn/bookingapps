import {
  fetchAllBookings,
  fetchBookingById,
  addBooking,
  editBooking,
  removeBooking,
} from "../services/bookingServices.js";

export const getBookings = async (req, res) => {
  try {
    const bookings = await fetchAllBookings();
    res.status(200).json({
      status: 200,
      message: "Bookings retrieved successfully",
      data: bookings,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error.message,
      data: null,
    });
  }
};

export const getBooking = async (req, res) => {
  try {
    const booking = await fetchBookingById(req.params.id);
    res.status(200).json({
      status: 200,
      message: "Booking retrieved successfully",
      data: booking,
    });
  } catch (error) {
    res.status(404).json({
      status: 404,
      message: error.message,
      data: null,
    });
  }
};

export const createBooking = async (req, res) => {
  try {
    const booking = await addBooking(req.body);
    res.status(201).json({
      status: 201,
      message: "Booking created successfully",
      data: booking,
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: error.message,
      data: null,
    });
  }
};

export const updateBooking = async (req, res) => {
  try {
    const booking = await editBooking(req.params.id, req.body);
    res.status(200).json({
      status: 200,
      message: "Booking updated successfully",
      data: booking,
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: error.message,
      data: null,
    });
  }
};

export const deleteBooking = async (req, res) => {
  try {
    const result = await removeBooking(req.params.id);
    res.status(200).json({
      status: 200,
      message: "Booking deleted successfully",
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      status: 404,
      message: error.message,
      data: null,
    });
  }
};
