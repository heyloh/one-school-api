import dotenv from 'dotenv';

dotenv.config();
export default {
  url: process.env.url || 'http://localhost:3333',
};
