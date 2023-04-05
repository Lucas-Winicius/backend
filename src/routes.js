const express = require('express');
const routes = express()

routes.get('/', (req, res) => {
    res.send('Hello World!')
})

routes.post('/', (req, res) => {
    res.send('Hello, ' + req.query.name)
})

module.exports = routes