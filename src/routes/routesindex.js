import express from 'express';
import confirmations from './confirmations.js';

const routes = express.Router();
routes.use('/confirmations', confirmations)


export default routes;