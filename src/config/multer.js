import multer from 'multer';
import { extname, resolve } from 'path';

const handleReturnRandom = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  storage: multer.diskStorage({
    destination: (request, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads'));
    },
    filename: (request, file, cb) => {
      cb(null, `${Date.now()}_${handleReturnRandom()}${extname(file.originalname)}`);
    },
  }),
};
