/**
 * db.config.js
 * Manages the configuration settings for connecting
 * to MongoDB
 *
 * Defines the path for the .env file
 * Initializes Mongoose models
 * Creates connection to the process.env
 *
 *
 */
module.exports = {
    HOST: "localhost",
    PORT: 27017,
    DB: "react_user_onboarding_local"
};

/**
 * Define path to ./config/.env file
 */
