/**
 * Import modules: Express web server, CORS, dotenv,
 */
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
//require('dotenv').config(); //Loads environment variables from a .env file into process.env




/**
 * Server configurations
 *
 * Defines app use with database connection and models
 */
const corsOptions = {
    origin: 'https://localhost:8081'
}

/**
 * Parse content-types for Application/JSON and Application/Form-Urlencoded
 */
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Create a test JSON route
 */
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the User Onboarding Application'
    });
});



/**
 * Code to open Mongoose connection to MongoDB database
 */
const db = require("./app/models");
const Role = db.role;

/**
 * Connect to MongoDB database
 */
const dbConfig = require('./app/config/db.config.js');
db.mongoose
    .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Successfully connect to MongoDB.");
        initial();
    })
    .catch(err => {
        console.error("Connection error", err);
        process.exit();
    });

/**
 * Create the Roles model with roles types
 */
function initial() {
    Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new Role({
                name: "user"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'user' to roles collection");
            });

            new Role({
                name: "moderator"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'moderator' to roles collection");
            });

            new Role({
                name: "admin"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'admin' to roles collection");
            });
        }
    });
}

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

/**
 * Set PORT and Listen for incoming requests on 8080
 */
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});