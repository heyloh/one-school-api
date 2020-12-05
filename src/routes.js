import express from 'express';

/* Controllers */
import HomeController from './controllers/HomeController';

const routes = express.Router();

/* Home */
routes.get('/', HomeController.index);

export default routes;
