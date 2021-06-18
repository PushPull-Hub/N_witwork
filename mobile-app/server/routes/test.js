const express = require('express')
const router = express.Router();
const moment = require('moment');

router.get('', (req, res, next) => {
    response.status(400).send('the app is working fine, time on the server is: ' + moment().format('h:mm A'))
})

router.post('', (req, res, next) => {
    res.status(200).send('post method reached')
})

router.put('', (req, res, next) => {
    res.status(200).send('put method reached')
})

router.delete('', (req, res, next) => {
    res.status(200).send('delete method reached')
})

module.exports = router;