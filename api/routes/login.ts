import express from 'express';
import pgPromise from 'pg-promise';

const dotenv = require("dotenv").config();
const router = express.Router();
const app = express();
const pgp = pgPromise({});
const db = pgp(`postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:5432/${process.env.DB_DATABASE}`)
// var db = pgp({
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     host: process.env.DB_HOST,
//     port: 5432,
//     database: process.env.DB_DATABASE,
//     ssl: {
//         rejectUnauthorized: false,
//     },
// });

router.route("/").all((req, res, next) => {
    console.log("Request detected");
    next();
})
.post((req, res) => {
    console.log(req.body);
    db.one(
        'SELECT * FROM users WHERE email = $1 AND password = $2',
        [req.body.email, req.body.password]
    ).then((data) => {
        console.log(data);
        res.send(data);
    }).catch(function(error) {
        console.log(error);
        res.sendStatus(404);
    });
});

module.exports = router;