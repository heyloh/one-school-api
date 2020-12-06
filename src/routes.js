import express from 'express';

/* Controllers */
import TokenController from './controllers/TokenController';
import UserController from './controllers/UserController';

/* Middlewares */
import LoginRequired from './middlewares/LoginRequired';

const routes = express.Router();

/* Token */
routes.post('/tokens', TokenController.store);

/* User */
routes.post('/users', UserController.store);
routes.get('/users', LoginRequired, UserController.index);
routes.get('/users/:id', UserController.show);
routes.put('/users/:id?', UserController.update);
routes.delete('/users/:id?', UserController.delete);

export default routes;
