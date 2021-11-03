"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pg_promise_1 = __importDefault(require("pg-promise"));
const dotenv = require("dotenv").config();
const router = express_1.default.Router();
const app = (0, express_1.default)();
const pgp = (0, pg_promise_1.default)({});
var db = pgp({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: 5432,
    database: process.env.DB_DATABASE,
    ssl: {
        rejectUnauthorized: false,
    },
});
router.route("/").all((req, res, next) => {
    console.log("Request detected");
    next();
})
    .post((req, res) => {
    console.log(req.body);
    db.one('SELECT * FROM users WHERE email = $1 AND password = $2', [req.body.email, req.body.password]).then((data) => {
        console.log(data);
        res.send(data);
    }).catch(function (error) {
        console.log(error);
        res.sendStatus(404);
    });
});
module.exports = router;
