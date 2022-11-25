/**
 * conn.js
 * Manages the database connection
 */


const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

var _db;

module.exports = {
    connectToServer: function (callback) {
        client.connection(function (err, db) {
            // Verify we got a good "db" object
            if (db)
            {
                _db = db.db("react_user_onboarding_local");
                console.log("Successfully connected to MONGODB_URI_LOCAL.");
            }
            return callback(err);
        });
    },

    getDb: function () {
        return _db;
    },
};