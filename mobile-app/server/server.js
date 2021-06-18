const app = require('./app');
const http = require('http');
const debug = require('debug')('node-angular');
const serverFunctions = require('./server.functions')
const moment = require('moment');

const port = serverFunctions.normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

const onListening = (address = server.address()) => {
  const bind = typeof address === 'string' ? 'the pipe: ' + address : 'the port: ' + address.port;
  debug('Listening on ' + bind);
  console.log('Listening on ' + bind + ', Time on the server: ' + moment().format('h:mm:ss A'))
}

server.on('listening', onListening);
server.on('error', serverFunctions.onError);
server.listen(port);

