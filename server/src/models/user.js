const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

// define our model

const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String,
});

// on save hook, encrypt password

userSchema.pre('save', function (next) {
  const user = this;
  const salt = bcrypt.genSaltSync(10);

  bcrypt.hash(user.password, salt, function (err, hash) {
    if (err) {
      return next(err);
    }

    user.password = hash;
    next();
  });
});

userSchema.methods.comparePassword = function (candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) {
      return callback(err);
    }
    callback(null, isMatch);
  });
};
// create model class

const ModelClass = mongoose.model('user', userSchema);

//export the model

module.exports = ModelClass;
