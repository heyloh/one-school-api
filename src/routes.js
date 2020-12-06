import express from 'express';

/* Controllers */
import HomeController from './controllers/HomeController';
import UserController from './controllers/UserController';

const routes = express.Router();

/* Home */
routes.get('/', HomeController.index);

/* User */
routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.put('/users/:id?', UserController.update);
routes.delete('/users/:id?', UserController.delete);

export default routes;
