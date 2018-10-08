const mongoose = require('mongoose')

const MONGO_URI = process.env.MONGO_URI

module.exports = function (app) {
  const URI = MONGO_URI || app.get('mongodb')

  mongoose.connect(URI, { useNewUrlParser: true })
  mongoose.Promise = global.Promise

  app.set('mongooseClient', mongoose)
}
