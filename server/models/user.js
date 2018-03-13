var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxLength: 30
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxLength: 30
  },
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  },
  phone: {
    type: String,
    required: true   
  },


});
userSchema.virtual('fullName').get(function () {
  return this.firstName + ' ' + this.lastName;
});

var User = mongoose.model('User', userSchema);

module.exports = {
  User
};
