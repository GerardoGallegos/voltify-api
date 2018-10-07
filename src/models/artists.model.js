// artists-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient')
  const { Schema } = mongooseClient
  const artists = new Schema({
    name: { type: String, required: true },
    following: { type: Number, default: 0 },
    followers: { type: Number, default: 0 },
    page: { type: String, required: true }
  }, {
    timestamps: true
  })

  return mongooseClient.model('artists', artists)
}
