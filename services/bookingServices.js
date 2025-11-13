import {
  getAllBookings,
  getBookingById,
  createBooking,
  updateBooking,
  deleteBooking,
} from "../repository/bookingRepository.js";
import Users from "../table/users.js";
import Fields from "../table/fields.js";
import Bookings from "../table/bookings.js";

export const fetchAllBookings = async () => {
  return await getAllBookings();
};

export const fetchBookingById = async (id) => {
  const booking = await Bookings.findOne({
    where: { id },
    include: [
      { model: Users, attributes: ["id", "name", "email"] },
      { model: Fields, attributes: ["id", "name", "type", "price_per_hour"] },
    ],
  });

  if (!booking) throw new Error("Booking not found");
  return booking;
};

export const addBooking = async (data) => {
  const { user_id, field_id, date, start_time, end_time } = data;

  const user = await Users.findByPk(user_id);
  if (!user) throw new Error("User not found");

  const field = await Fields.findByPk(field_id);
  if (!field) throw new Error("Field not found");

  const existingBooking = await Bookings.findOne({
    where: {
      field_id,
      booking_date: date,
      start_time,
      end_time,
    },
  });

  if (existingBooking) {
    throw new Error("Time slot already booked for this field on the same date");
  }

  const newBooking = await createBooking({
    user_id,
    field_id,
    booking_date: date,
    start_time,
    end_time,
    status: "pending",
  });

  return newBooking;
};

export const editBooking = async (id, data) => {
  const booking = await getBookingById(id);
  if (!booking) throw new Error("Booking not found");

  await updateBooking(id, data);
  return await getBookingById(id);
};

export const removeBooking = async (id) => {
  const booking = await getBookingById(id);
  if (!booking) throw new Error("Booking not found");

  await deleteBooking(id);
  return { message: "Booking deleted successfully" };
};
