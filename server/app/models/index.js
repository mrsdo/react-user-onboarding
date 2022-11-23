/**
 * Initialize Mongoose
 */
const mongoose = require('mongoose');

/**
 * Mongoose Promise
 */
mongoose.Promise = global.Promise;

/**
 * Const db Object
 */
const db = {};

db.mongoose = mongoose;

db.user = require('./user.model');
db.role = require('./role.model');

db.ROLES = ['user','moderator', 'admin'];

module.exports = db;
