const express = require('express');

const router = express.Router();


router.get('', (request, response, next) => {
    response.status(200).send('get method reached')
})

router.post('', (request, response, next) => {
    response.status(200).send('post method reached')
})

router.put('', (request, response, next) => {
    response.status(200).send('put method reached')
})

router.delete('', (request, response, next) => {
    response.status(200).send('delete method reached')
})

module.exports = router;