import Users from "../table/users.js";
import Fields from "../table/fields.js";
import Bookings from "../table/bookings.js";
import db from "../config/database.js";

Users.hasMany(Bookings, { foreignKey: "user_id" });
Bookings.belongsTo(Users, { foreignKey: "user_id" });

Fields.hasMany(Bookings, { foreignKey: "field_id" });
Bookings.belongsTo(Fields, { foreignKey: "field_id" });

(async () => {
  try {
    await db.sync({ alter: true });
    console.log('Database & tables created with relationships!');
  } catch (err) {
    console.error('Unable to create tables, shutting down...', err);
  }
})();

export { Users, Fields, Bookings };
