const express = require('express');
const app = express();

const routesOf = require('./routes/index')
const serviceOf = require('./services/index')


app.use(serviceOf.app.setHeaders);

app.use('/test', routesOf.test);
app.use('/profile', routesOf.profile)
app.use('/user', routesOf.user)

app.use('', serviceOf.app.replyWith404);

module.exports = app;
