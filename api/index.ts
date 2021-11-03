import express from 'express';
import cors from 'cors';
import pgPromise from 'pg-promise';
const dotenv = require("dotenv").config();
const loginRouter = require('./routes/login');
const productsRouter = require('./routes/products');
const categoriesRouter = require('./routes/categories');
const app = express();
const pgp = pgPromise({});
const port = 3001;

app.listen(process.env.PORT || port, () => {
    console.log(`App listening at http://localhost:${port}`);
});


const corsOptions: cors.CorsOptions = {
    origin: ['http://localhost:3000']
};
app.use(cors(corsOptions));

app.use(express.json());
app.use('/login', loginRouter);
app.use('/products', productsRouter);
app.use('/categories', categoriesRouter);

module.exports = app;