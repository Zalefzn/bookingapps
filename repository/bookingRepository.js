import Bookings from "../table/bookings.js";
import Users from "../table/users.js";
import Fields from "../table/fields.js";

export const getAllBookings = async () => {
  return await Bookings.findAll({
    include: [
      { model: Users, attributes: ["id", "name", "email"] },
      { model: Fields, attributes: ["id", "name", "type", "price_per_hour"] },
    ],
  });
};

export const getBookingById = async (id) => {
  return await Bookings.findOne({
    where: { id },
    include: [
      { model: Users, attributes: ["id", "name", "email"] },
      { model: Fields, attributes: ["id", "name", "type", "price_per_hour"] },
    ],
  });
};

export const createBooking = async (data) => {
  return await Bookings.create(data);
};

export const updateBooking = async (id, data) => {
  return await Bookings.update(data, { where: { id } });
};

export const deleteBooking = async (id) => {
  return await Bookings.destroy({ where: { id } });
};
