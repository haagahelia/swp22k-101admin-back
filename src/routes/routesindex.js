const express = require('express');
const confirmations=require('./confirmations.js')

const routes = express.Router()
routes.use('/confirmations', confirmations)
module.exports = routes