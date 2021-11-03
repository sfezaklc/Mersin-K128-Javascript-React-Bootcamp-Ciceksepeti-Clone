import express from 'express';
import pgPromise from 'pg-promise';
import {Category} from '../class/category';

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
.get((req, res) => {
    console.log(req.body);
    db.any(
        'SELECT * FROM product_categories'
    ).then((data) => {
        console.log(data);
        res.send(data);
    }).catch(function(error) {
        console.log(error);
        res.sendStatus(404);
    });
})
.post((req, res) => {
    console.log(req.body);
    db.one(
        'INSERT INTO product_categories (name, parent_id) VALUES ($1, $2) RETURNING id',
        [req.body.name, req.body.parent_id]
    ).then((data) => {
        console.log(data);
        res.send({success: true, id: data.id});
    }).catch(function(error) {
        console.log(error);
        res.sendStatus(404);
    });
})
.delete((req, res) => {
    console.log(req.body);
    db.none(
        'DELETE FROM product_categories WHERE id = $1',
        [req.body.id]
    ).then((data) => {
        console.log(data);
        res.send({success: true});
    }).catch(function(error) {
        console.log(error);
        res.sendStatus(404);
    });
});

router.route('/:id')
.get((req, res) => {
    let category = new Category();
    db.one('SELECT * FROM product_categories WHERE id = $1', [req.params.id])
    .then(function(data) {
        category = data;

        db.many('SELECT * FROM products WHERE category_id = $1', [req.params.id])
        .then(function(data) {
            category.products = data;
            res.send(category);
        })
        .catch();
    })
    .catch(function(error) {
        res.sendStatus(404);
    })
});

module.exports = router;