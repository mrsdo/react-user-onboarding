/**
 * index.js
 * @type {{verifyToken: function(*, *, *): (*|undefined),
 * isModerator: function(*, *, *): void, isAdmin: function(*, *, *): void}}
 */
const authJwt = require("./authJwt");
const verifySignUp = require("./verifySignUp");

module.exports = {
    authJwt,
    verifySignUp
};