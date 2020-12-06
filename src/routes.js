import express from 'express';

/* Controllers */
import TokenController from './controllers/TokenController';
import StudentController from './controllers/StudentController';
import UserController from './controllers/UserController';

/* Middlewares */
import LoginRequired from './middlewares/LoginRequired';

const routes = express.Router();

/* Token */
routes.post('/tokens', TokenController.store);

/* Student */
routes.get('/students', StudentController.index);
routes.post('/students', StudentController.store);

/* User */
routes.post('/users', UserController.store);
routes.put('/users', LoginRequired, UserController.update);
routes.delete('/users', LoginRequired, UserController.delete);

/* Should not exist on a real system */
/* routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show); */

export default routes;
