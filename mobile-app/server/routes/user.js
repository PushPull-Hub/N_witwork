const express = require('express');

const router = express.Router();


router.get('', (req, res, next) => {
    res.send('get method reached')
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