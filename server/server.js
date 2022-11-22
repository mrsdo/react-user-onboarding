/**
 * Set up Express web server with CORS
 */
const express = require('express');
const cors = require('cors');
const app = express();

/**
 * Express configuration
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
 * Set PORT and Listen for incoming requests on 8080
 */
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
