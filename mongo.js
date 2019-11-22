const mongoose = require("mongoose");
var mongodbErrorHandler = require('mongoose-mongodb-errors')
const { mongourl } = require('./config/key')
mongoose.Promise = global.Promise;
mongoose.plugin(mongodbErrorHandler);
mongoose.connect(mongourl, { useNewUrlParser: true, useUnifiedTopology: true });