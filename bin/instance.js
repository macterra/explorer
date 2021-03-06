#!/usr/bin/env node
const debug = require('debug')('explorer')
const settings = require('../lib/settings')
const db = require('../lib/database')
const app = require('../app')
const { promisify } = require('../lib/util')

app.set('port', process.env.PORT || settings.port)

db.connect(settings.dbsettings).then(() =>
  promisify(db.get_stats, settings.coin)
).then((stats) => {
  app.locals.stats = stats
  const server = app.listen(app.get('port'), () => {
    debug('Express server listening on port ' + server.address().port)
  })
})
