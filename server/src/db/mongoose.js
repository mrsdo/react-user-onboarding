const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// DB & .env set
const db = {};

db.mongoose = mongoose;

db.user = require("../models/user.model");
db.role = require("../models/role.model");

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;