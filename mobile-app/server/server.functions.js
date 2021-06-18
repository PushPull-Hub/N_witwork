const debug = require('debug')('node-angular');

const normalizePort = (value) => {
    const port = parseInt(value, 10);
    return isNaN(port) ? value : port >= 0 ? port : false;
}

const onError = (error) => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ';
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
}

exports.normalizePort = normalizePort;
exports.onError = onError;


