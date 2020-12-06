import dotenv from 'dotenv';

dotenv.config();
import jwt from 'jsonwebtoken';

export default (request, response, next) => {
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
    request.user_id = id;
    request.user_email = email;
    return next();
  } catch (err) {
    return response.status(401).json({
      errors: ['Invalid token.'],
    });
  }
};
