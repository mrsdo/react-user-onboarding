/**
 * server.js
 * Set up an Express web server to use localhost: 8081
 * Include CORS
 */

const express = require('express');
const cors = require('cors');
const app = express();

const corsOptions = {
    origin: 'http://localhost:8081'
}

app.use(cors(corsOptions));

/**
 * Parse content-types Application/JSON and Application/form-urlencoded
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Add a route for testing JSON
 */
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the User Onboarding Application!'
    });
});

/**
 * Set PORT and Listen for requests on 8080
 */
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
