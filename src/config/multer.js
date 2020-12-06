import multer from 'multer';
import { extname, resolve } from 'path';

const handleReturnRandom = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  fileFilter: (request, file, cb) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new multer.MulterError('File format must be image/jpeg or image/png'));
    }

    return cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (request, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads'));
    },
    filename: (request, file, cb) => {
      cb(null, `${Date.now()}_${handleReturnRandom()}${extname(file.originalname)}`);
    },
  }),
};
