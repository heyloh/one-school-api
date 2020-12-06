import express from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

/* Controllers */
import TokenController from './controllers/TokenController';
import PictureController from './controllers/PictureController';
import StudentController from './controllers/StudentController';
import UserController from './controllers/UserController';

/* Middlewares */
import LoginRequired from './middlewares/LoginRequired';

const upload = multer(multerConfig);

const routes = express.Router();

/* Token */
routes.post('/tokens', TokenController.store);

/* Picture */
routes.post('/pictures', upload.single('picture'), PictureController.store);

/* Student */
routes.get('/students', StudentController.index);
routes.get('/students/:id', StudentController.show);
routes.post('/students', LoginRequired, StudentController.store);
routes.put('/students/:id', LoginRequired, StudentController.update);
routes.delete('/students/:id', LoginRequired, StudentController.delete);

/* User */
routes.post('/users', UserController.store);
routes.put('/users', LoginRequired, UserController.update);
routes.delete('/users', LoginRequired, UserController.delete);

/* Should not exist on a real system */
/* routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show); */

export default routes;
