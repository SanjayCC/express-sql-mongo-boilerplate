const express = require('express');
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
const passport = require('passport');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const logger = require('./utils/logs');

module.exports = function () {
  const server = express();
  let create;
  let start;
  create = function (config, db) {
    const routes = require('./routes');
    // Server settings
    server.set('env', config.env);
    server.set('port', config.port);
    server.set('hostname', config.hostname);
    // Returns middleware that parses json
    server.use(helmet());
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(cookieParser());
    // server.use(logger('dev'));
    server.use(passport.initialize());
    //    mongoose.connect(db.database);
    require('../config/passport')(passport);
    // Set up routes
    routes.init(server);
  };
  start = function () {
    const hostname = server.get('hostname');
    const port = server.get('port');
    server.listen(port, () => {
      logger.log('info', `Express server listening on - http://${hostname}:${port}`);
    });
  };
  return {
    create,
    start,
  };
};
