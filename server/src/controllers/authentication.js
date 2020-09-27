const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const User = require('../models/user');
const config = require('../config/config');
const mailer = require('../modules/mailer');

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.sign({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signin = (req, res, next) => {
  res.send({ token: tokenForUser(req.user) });
};
exports.forgotPassword = async (req, res, next) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) return res.status(400).send({ message: 'User not found' });

    const passwordResetToken = crypto.randomBytes(20).toString('hex');

    const passwordResetExpires = new Date();
    passwordResetExpires.setHours(passwordResetExpires.getHours() + 1);

    await User.findByIdAndUpdate(user.id, {
      $set: {
        passwordResetToken,
        passwordResetExpires,
      },
    });
    const link = `${config.webUrl}/resetPassword/${passwordResetToken}`;
    mailer.sendMail(
      {
        to: email,
        from: 'leo292629@gmail.com',
        template: 'auth/forgotPassword',
        context: { link },
      },
      (err) => {
        if (err) {
          console.log(err);
          return res
            .status(400)
            .send({ message: 'could not send forgot password email' });
        }

        res.send({ message: 'Email enviado com sucesso' });
      }
    );
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: 'Error on forgot password, try again' });
  }
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
exports.resetPassword = async (req, res) => {
  const { email, token, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).send({ message: 'User not found' });
    console.log(token, user.passwordResetToken);
    if (token !== user.passwordResetToken)
      return res.status(400).send({ message: 'Invalid token' });

    const now = new Date();

    if (now > user.passwordResetExpires)
      return res
        .status(400)
        .send({ message: 'Expired token, generate a new one' });

    user.password = password;

    await user.save();

    res.send({ message: 'Senha atualizada com sucesso' });
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: 'Cannot reset password, try again' });
  }
};
