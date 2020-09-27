const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const path = require('path');

const config = require('../config/config');

const { user, pass } = config;
const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user,
    pass,
  },
});

const viewPath = path.resolve(__dirname, '..', 'resources', 'mail');

transport.use(
  'compile',
  hbs({
    viewEngine: 'handlebars',
    viewPath,
    extName: '.handlebars',
  })
);

module.exports = transport;
