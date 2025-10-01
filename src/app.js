// Express API backend app

const express = require('express');
const cors = require("cors");

const path = require('path');
const app = express();

require('dotenv').config();

const mainRoutes = require('./routes/mainRoutes.js');
// const jwtMiddleware = require('./middleware/auth/jwtMiddleware.js');
// const cronMiddleware = require('./middleware/cronMiddleware.js');

//////////////////////////////////////////////////////
// CORS
//////////////////////////////////////////////////////

app.use(cors({
    origin: "http://localhost:3001",
    credentials: true,
    methods: ["GET","POST","PUT","DELETE","OPTIONS"],
    allowedHeaders: ["Content-Type","Authorization"]
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//////////////////////////////////////////////////////
// PROTECT API ROUTES (UNCHANGED)
//////////////////////////////////////////////////////

app.use('/api', mainRoutes);


module.exports = app;

