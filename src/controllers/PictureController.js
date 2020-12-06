import multer from 'multer';
import multerConfig from '../config/multer';

const upload = multer(multerConfig).single('picture');

export default {
  async store(request, response) {
    return upload(request, response, (err) => {
      if (err) {
        return response.status(400).json({
          errors: [err.code],
        });
      }

      return response.json(request.file);
    });
  },
};
