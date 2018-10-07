// albums-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
const slugify = require('slugify-mongoose')

module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient')
  const { Schema } = mongooseClient
  const albums = new Schema({
    title: { type: String, required: true },
    slug: { type: String, slug: 'title', unique: true, index: true },
    description: String,
    duration: { type: Number, default: 0 },
    source: { type: String, default: '' }
  }, {
    timestamps: true
  })

  albums.plugin(slugify)

  return mongooseClient.model('albums', albums)
}
