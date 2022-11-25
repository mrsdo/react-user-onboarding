/**
 * Import modules: Express web server, CORS, dotenv,
 *     mongodb command installs MongoDB database driver that allows your Node.js
 *     applications to connect to the database and work with data.
 *
 *     express installs the web framework for Node.js. (It will make our life easier.)
 *
 *     cors installs a Node.js package that allows cross-origin resource sharing.
 *     dotenv installs the module that loads environment variables from a .env file
 *     into process.env file. This lets you separate configuration files from the code.
 */

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const MongoClient = require('mongodb').MongoClient;
const dotenvExt = require('dotenv-extended');
const app = express();

/**
 * Server configurations
 *
 * Defines app use with database connection and models
 */

require("dotenv").config({ path: "./db/config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./app/routes/record"));
// get driver connection
const dbo = require("./db/conn");

app.listen(port, () => {
    // perform a database connection when server starts
    dbo.connectToServer(function (err) {
        if (err) console.error(err);

    });
    console.log(`Server is running on port: ${port}`);
});