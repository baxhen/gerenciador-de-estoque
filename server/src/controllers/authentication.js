const jwt = require('jsonwebtoken');
const User = require('../models/user');
const config = require('../config/config');

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.sign({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signin = (req, res, next) => {
  res.send({ token: tokenForUser(req.user) });
};
exports.signup = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(422).send({ error: 'You must provide email and password' });
  }
  // see if a user already exists
  User.findOne({ email }, async (err, existingUser) => {
    // if a user with email already exists return an error

    if (err) {
      return next(err);
    }

    if (existingUser) {
      res.status(422).send({ error: 'Email is in use' });
    }
    // if a user does not exists crete and save user record
    const user = new User({ email, password });

    try {
      await user.save();
      res.send({ token: tokenForUser(user) });
    } catch (error) {
      console.log('Signup', error.message);
    }
  });
};
