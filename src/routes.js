import express from 'express';

/* Controllers */
import HomeController from './controllers/HomeController';
import UserController from './controllers/UserController';

const routes = express.Router();

/* Home */
routes.get('/', HomeController.index);

/* User */
routes.post('/users', UserController.store);

export default routes;
