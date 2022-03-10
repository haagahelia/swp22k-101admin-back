const express = require('express');
const dotenv = require('dotenv');
const app = express();
const cors = require('cors');

dotenv.config();

const knex = require('knex')({
  client: process.env.DB_DRIVER_MODULE || 'mysql',
  connection: {
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_POR) || 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    debug: process.env.DB_DEBUG || false,
    multipleStatements: process.env.DB_MULTIPLE_STATEMENTS || true,
  },
  pool: {
    min: Number(process.env.DB_CONNECTION_POOL_MIN) || 0,
    max: Number(process.env.DB_CONNECTION_POOL_MAX) || 7,
  }
})

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