const routes = require('express').Router();
const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignIn = passport.authenticate('local', { session: false });

routes.get('/', requireAuth, (req, res) => {
  res.send('hi there');
});
routes.post('/signin', requireSignIn, Authentication.signin);
routes.post('/signup', Authentication.signup);

module.exports = routes;
