const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const routes = require( "./src/routes/routesindex.js");

const app = express();
const cors = require('cors');

app.use(cors())
app.use( routes)

app.get('/', (request, response) => {
  response.send('Admin fullstack project')
})

app.listen(process.env.BE_SERVER_PORT);
console.log(`Node server started and listens to port ${process.env.BE_SERVER_PORT}.`);