/**
 * Define model for the role model
 * name, auth (1-admin, 2-moderator, 3-user), type
 */
const mongoose = require("mongoose");

const Role = mongoose.model(
    "Role",
    new mongoose.Schema({
        name: String, //[BoardUser, BoardModerator, BoardAdmin]
    })
);

module.exports = Role;