const mongoose = require('mongoose')
const app = require('./app')
const { mongoUri } = require('./config/config')

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})
mongoose.connection.on('connected', () => {
  // eslint-disable-next-line
  console.log('Connected to mongo instance')
  app.listen(5000, (err) => {
    if (err) {
      // eslint-disable-next-line
      console.log(err)
    }
    // eslint-disable-next-line
    console.log('Listening')
  })
})
mongoose.connection.on('error', (err) => {
  // eslint-disable-next-line
  console.error('Error connecting to mongo', err)
})
