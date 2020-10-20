const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const User = require('../models/user');
const config = require('../config/config');
const Mailer = require('../services/Mailer');

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.sign({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signin = (req, res, next) => {
  if(req.user.isVerified){
    res.send({ token: tokenForUser(req.user) });
  } else {
    res.status(401).send({ message:'Conta desativada, verifique seu email para ativar'})
  }

};
exports.forgotPassword = async (req, res, next) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) return res.status(400).send({ message: 'Usuário não cadastrado na nossa base de dados.' });

    const authenticationToken = crypto.randomBytes(20).toString('hex');

    const authenticationTokenExpires = new Date();
    authenticationTokenExpires.setHours(authenticationTokenExpires.getHours() + 1);

    await User.findByIdAndUpdate(user.id, {
      $set: {
        authenticationToken,
        authenticationTokenExpires,
      },
    });

    const link = `${config.webUrl}/resetPassword/${authenticationToken}/${email}`;
    const Email = new Mailer({
      local:{
        email,
        link,
        username:user.username

      },
      templateName:'resetPassword',
    })

    Email.sendEmail().then((err) => {
      if (err) {
        console.log(err);
        return res
          .status(400)
          .send({ message: 'could not send forgot password email' });
      }

      res.send({ message: 'Email enviado com sucesso' });
    })

  } catch (error) {
    console.log(error);
    res.status(400).send({ message: 'Error on forgot password, try again' });
  }
};
exports.signup = (req, res, next) => {
  const { email, password, username } = req.body;

  if (!email || !password || !username) {
    res.status(422).send({ error: 'You must provide email, password and a username' });
  }
  // see if a user already exists
  User.findOne({ email }, async (err, existingUser) => {
    // if a user with email already exists return an error

    if (err) {
      return next(err);
    }

    if (existingUser) {
      res.status(422).send({ message: 'Email já cadastrado' });
    }
    // if a user does not exists create and save user record
    const user = new User({ email, password, username });

    try {
      await user.save();
      // get the email and send a link to verify the email
      // res.send({ token: tokenForUser(user) });
    } catch (error) {
      console.log('Signup', error.message);
    }
    const authenticationToken = crypto.randomBytes(20).toString('hex');

    const authenticationTokenExpires = new Date();
    authenticationTokenExpires.setHours(authenticationTokenExpires.getHours() + 24);

    try {
      await User.findByIdAndUpdate(user.id, {
        $set: {
          authenticationToken: authenticationToken,
          authenticationTokenExpires: authenticationTokenExpires,
        },
      });
    } catch (error) {
      console.log('SaveToken', error.message);
    }
    const link = `${config.webUrl}/verifyEmail/${authenticationToken}/${email}`;
    const Email = new Mailer({
      local:{
        email,
        link,
        username:user.username
      },
      templateName:'verifyEmail',
    })

    Email.sendEmail().then((err) => {
      if (err) {
        console.log(err);
        return res
          .status(400)
          .send({ message: 'could not send verify account email' });
      }

      res.send({ message: 'Verifique a sua caixa de entrada. Enviamos um link para validar o seu email.' });
    })
  });
};
exports.resetPassword = async (req, res) => {
  const { email, token, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).send({ message: 'User not found' });

    if (token !== user.authenticationToken)
      return res.status(400).send({ message: 'Token inválido, para cada atualização de senha é necessário um token único' });

    const now = new Date();
    if(+now > +user.authenticationTokenExpires)
      return res.status(400).send({ message: 'Token expirado, solicite um novo token.' });


    user.password = password;
    user.authenticationToken = ''

    await user.save();

    res.send({ message: 'Senha atualizada com sucesso' });
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: 'Cannot reset password, try again' });
  }
};

exports.verifyEmail = async (req,res) =>{
  const { token, email } = req.body

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).send({ message: 'User not found' });

    if (!user.authenticationToken)
      return res.status(400).send({ message: 'Sua conta já esta ativada pode fazer login, caso não esteja peça ajuda na central de atendimento.' });

    if (token !== user.authenticationToken)
      return res.status(400).send({ message: 'Token inválido, para cada atualização de senha é necessário um token único' });

    const now = new Date();
    if(+now > +user.authenticationTokenExpires)
      return res.status(400).send({ message: 'Token expirado, solicite um novo token.' });

    await User.findByIdAndUpdate(user.id, {
      $set: {
        isVerified: true,
        authenticationToken: '',
      },
    });

    res.send({ message: 'Email verificado com sucesso' });
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: 'Cannot verify email, try again' })
  }




}
