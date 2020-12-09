import dotenv from 'dotenv';

dotenv.config();
import './database';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { resolve } from 'path';
import routes from './routes';

const whitelist = [
  'https://one-school-api.herokuapp.com',
  'http://localhost:3000',
];

const corsOptions = {
  origin(origin, cb) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      cb(null, true);
    } else {
      cb(new Error('Not allowed by CORS.'));
    }
  },
};

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(resolve(__dirname, '..', 'uploads')));
app.use(cors(corsOptions));
app.use(helmet());
app.use(routes);

export default app;
