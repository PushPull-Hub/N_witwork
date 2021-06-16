const app = require('./app');
const http = require('http');
const debug = require('debug')('node-angular');
const serverFunctions = require('./server.functions')

const port = serverFunctions.normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

const onListening = (address = server.address()) => {
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  debug('Listening on ' + bind);
};

server.on('listening', onListening);
server.on('error', serverFunctions.onError);

server.listen(port);
