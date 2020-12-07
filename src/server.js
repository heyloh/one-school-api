import dotenv from 'dotenv';
import app from './app';

dotenv.config();

const port = 3333;

app.listen(process.env.PORT || port, () => {
  console.log(`🚀 Server listening on port: ${port}`);
});
