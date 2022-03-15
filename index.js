const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const cors = require('cors');
const knex = require('./src/db/knex.js')

app.use(cors())

app.get('/confirmations/all', (request, response) => {
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

app.get('/confirmations/:id', (request, response) => {
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

app.listen(process.env.BE_SERVER_PORT);
console.log(`Node server started and listens to port ${process.env.BE_SERVER_PORT}.`);