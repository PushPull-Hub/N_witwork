const app = require('./app');
const http = require('http');
const debug = require('debug')('node-angular');

const normalizePort = (value) => {
  const port = parseInt(value, 10);
  return isNaN(port) ? value : port >= 0 ? port : false;
};

const onError = (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const adress = server.address();
  const bind = typeof adress === 'string' ? 'pipe ' + adress : 'port ' + port;
  debug('Listening on ' + bind);
};

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);
server.on('listening', onListening);
server.on('error', onError);

server.listen(port);
