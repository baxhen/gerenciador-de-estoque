const passport = require('passport');
const User = require('../models/user');
const config = require('../config/config');
const { Strategy, ExtractJwt } = require('passport-jwt');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

// Create local strategy

const localOptions = { usernameField: 'email' };

const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
  // Verify this email and password, call done with the user
  // if it is the correct email and password
  // otherwise call done with false

  User.findOne({ email }, (err, user) => {
    if (err) {
      return done(err);
    }
    if (!user) {
      return done(false);
    }

    user.comparePassword(password, function (err, isMatch) {
      if (err) {
        console.log('step 1');
        return done(err);
      }

      if (!isMatch) {
        console.log('step 2');
        return done(null, false);
      }

      console.log('step 3');
      return done(null, user);
    });
  });
});

// Setup options for JWT Strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret,
};
// Create JWT strategy
const jwtLogin = new Strategy(jwtOptions, (payload, done) => {
  // se if user id and payload exists in our database
  // if it does, call 'done' with that other
  // otherwise, call done without a user object
  User.findById(payload.sub, (err, user) => {
    if (err) {
      return done(err, false);
    }
    const thisUserExists = user ? true : false;

    thisUserExists ? done(null, user) : done(null, false);
  });
});

// Tell passport to use this strategy

passport.use(jwtLogin);
passport.use(localLogin);
