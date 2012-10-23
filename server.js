var sys = require('sys')
  , replify = require('replify')
  , express = require('express')
  , options = require('optimist').default({ port: 8888 }).argv

var app = express.createServer(express.static(__dirname + '/.'))
  , logger = app.logger = console

app.listen(options.port, function () {
  logger.log("App Started - Slides available at http://localhost:%d", options.port)
  logger.log("App Options",   options)
});

replify('2012-10-realtimeconf', app)

