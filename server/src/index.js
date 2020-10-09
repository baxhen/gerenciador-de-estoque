const app = require('./app');
const mongoose = require('mongoose');
const { mongoUri } = require('./config/config');

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify:false,
});
mongoose.connection.on('connected', () => {
  console.log('Connected to mongo instance');
  app.listen(5000, (err) => {
    console.log('Listening');
  });
});
mongoose.connection.on('error', (err) => {
  console.error('Error connecting to mongo', err);
});
