const express = require('express');
var bodyParser = require('body-parser');
require('express-async-errors');
const app = express();
const morgan = require('morgan');
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
require('./mongo');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()).use(morgan());

app.use("/invitations", require("./routes/invitationRoute"));
app.use("/members", require("./routes/userRoutes"));

app.use((req, res, next) => {
    req.status = 404;
    const error = new Error("Route not found");
    next(error);
})

app.listen(port, () => { console.log("Connected") });
