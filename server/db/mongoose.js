var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
let mongooseUri = process.env.MONGODB_URI || "mongodb://localhost:27017/rabbit-courses";
mongoose.connect(mongooseUri);

module.exports = {mongoose};
