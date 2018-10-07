const artists = require('./artists/artists.service.js')
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(artists)
}
