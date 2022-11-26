/**
 * conn.js
 * Manages the database connection
 */



const MongoClient = require("mongodb");
const db = process.env.ATLAS_URI;
const client = new MongoClient(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

let _db;

module.exports = {
    connectToServer: function (callback) {
        client.connection(function (err, db) {

            // Verify we got a good "db" object
            if (db)
            {
                _db = db.db("user_onboarding_local");
                console.log("Successfully connected to MONGODB_URI_LOCAL.");
            }
            return callback(err);
        });
    },

    getDb: function () {
        return _db;
    },
};