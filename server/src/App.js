// import modules
const express = require('express'); //Fast, un-opinionated, minimalist web framework for Node.js
const mongoose = require('mongoose'); //object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.
const morgan = require('morgan'); //HTTP request logger middleware for node.js
const cors = require('cors');  //restricts resources on a web page to be requested from another domain outside the domain from which the first resource was served.
require('dotenv').config(); //Loads environment variables from a .env file into process.env
const nodemon = require('nodemon');  //automatically restart the node application when file changes in the directory are detected

// app
const app = express();


// db
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB Connected successfully'))
    .catch((err) => console.log('MongoDB Connection failed',err));

// middleware
app.use(morgan('dev'));
app.use(cors({origin: true, credentials: true}));

// routes accessible
const routesTest = require("./routes/routes-test");
app.use("/", routesTest);

// port use process.env to define port or use 8080
const port = process.env.PORT || 8080;

// Listener: Outputs status of server to console.log
const server = app.listen(port, () => console.log(`Server listening on port ${port}`));