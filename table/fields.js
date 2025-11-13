import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Fields = db.define("fields", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price_per_hour: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
}, {
  freezeTableName: true,
  createdAt: false,
  updatedAt: false,
});

export default Fields;
