import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Bookings = db.define("bookings", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  field_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  booking_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  start_time: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  end_time: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("pending", "approved", "cancelled"),
    defaultValue: "approved",
  },
}, {
  freezeTableName: true,
  createdAt: false,
  updatedAt: false,
});

export default Bookings;
