const apiRoute = require('./apis');
const logger = require('../utils/logs');

function init(server) {
  server.get('*', (req, res, next) => {
    logger.log('info', `Request was made to: ${req.originalUrl}`);
    return next();
  });
  server.use('/api', apiRoute);
}
module.exports = {
  init,
};
