const confirmations = require('express').Router();

const knex = require('../../src/db/knex.js')


confirmations.get('/all', (request, response) => {
  knex
    .select()
    .from("signature")
    .then(data => {
      response.json(data);
    })
    .catch(error => {
      console.log(error);
    })
})

confirmations.get('/:id', (request, response) => {
  knex
    .select()
    .from("signature")
    .where("uuid", request.params.id)
    .then(data => {
      response.json(data);
    })
    .catch(error => {
      console.log(error);
    })
})

module.exports=confirmations