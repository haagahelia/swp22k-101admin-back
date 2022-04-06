import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import routes from './src/routes/routesindex.js';


dotenv.config();
const app = express();

app.use(cors())
app.use(routes)

app.get('/', (request, response) => {
  response.send('Admin fullstack project')
})

app.listen(process.env.BE_SERVER_PORT);
console.log(`Node server started and listens to port ${process.env.BE_SERVER_PORT}.`);