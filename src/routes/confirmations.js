import {
  successHandler,
  databaseErrorHandler
} from '../responseHandlers/index.js';
import express from 'express';
import knex from '../../src/db/knex.js';

const confirmations = express.Router();



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

export default confirmations;

