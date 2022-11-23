/**
 * verifysignup.js
 *
 * Check for duplicates (username, email)
 * validate roles request
 */
import db from '../models';

const ROLES = db.ROLES;
const User = db.user;

function checkDuplicateUsers(req, res, next) {
    /*
     * Check for duplicate username
     */
    User.findOne({
        username: req.user.username
    }).exec((err, user) => {
        if (err) {
            res.status(500).send({message: err});
            return;
        }

        if (user) {
            res.status(400).send({message: "Failed! Username is already in use!"});
            return;
        }

        // Email
        User.findOne({
            email: req.body.email
        }).exec((err, user) => {
            if (err) {
                res.status(500).send({message: err});
                return;
            }

            if (user) {
                res.status(400).send({message: "Failed! Email is already in use!"});
                return;
            }

            next();
        });
    });
};

function checkRoles(req, res, next) {
    /*
     * Check for roles
     */
    if (req.body.roles) {
        for (let i = 0; i < req.body.roles.length; i++) {
            if (!ROLES.includes(req.body.roles[i])) {
                res.status(400).send({
                    message: `Failed! Role ${req.body.roles[i]} does not exist!`
                });
                return;
            }
        }
    }

    next();
};

const verifySignUp = {
    checkDuplicateUsers,
    checkRoles
};

module.exports = verifySignUp;