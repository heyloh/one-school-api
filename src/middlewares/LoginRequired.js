import dotenv from 'dotenv';

dotenv.config();
import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (request, response, next) => {
  const { authorization } = request.headers;

  if (!authorization) {
    return response.status(401).json({
      errors: ['Login required.'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const data = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = data;

    const user = await User.findOne({
      where: {
        id,
        email,
      },
    });

    if (!user) {
      return response.status(401).json({
        errors: ['Invalid user.'],
      });
    }

    request.user_id = id;
    request.user_email = email;
    return next();
  } catch (err) {
    return response.status(401).json({
      errors: ['Invalid token.'],
    });
  }
};
