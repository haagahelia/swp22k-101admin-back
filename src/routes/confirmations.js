import {
  successHandler,
  databaseErrorHandler
} from '../responseHandlers/index';


const confirmations = require('express').Router();
const knex = require('../../src/db/knex.js')


confirmations.get('/all', (request, response) => {
  knex
    .select()
    .from("signature")
    .then(data => {
      response.json(data);
      successHandler(response, 'Operation successful');
    })
    .catch(error => {
      databaseErrorHandler(error, response);
    })
})

confirmations.get('/:id', (request, response) => {
  knex
    .select()
    .from("signature")
    .where("uuid", request.params.id)
    .then(data => {
      response.json(data);
      successHandler(response, 'Operation successful');
    })
    .catch(error => {
      databaseErrorHandler(error, response);
    })
})

module.exports = confirmations

