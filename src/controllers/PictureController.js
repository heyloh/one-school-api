import multer from 'multer';
import multerConfig from '../config/multer';

import Picture from '../models/Picture';

const upload = multer(multerConfig).single('picture');

export default {
  async store(request, response) {
    return upload(request, response, async (err) => {
      if (err) {
        return response.status(400).json({
          errors: [err.code],
        });
      }

      try {
        const { originalname, filename } = request.file;
        const { student_id } = request.body;
        const picture = await Picture.create({ originalname, filename, student_id });

        return response.json(picture);
      } catch (e) {
        return response.status(400).json({
          errors: ['Student does not exist.'],
        });
      }
    });
  },
};
