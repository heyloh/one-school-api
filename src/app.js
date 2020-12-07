import dotenv from 'dotenv';

dotenv.config();
import './database';
import express from 'express';
import { resolve } from 'path';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(resolve(__dirname, '..', 'uploads')));
app.use(routes);

export default app;
