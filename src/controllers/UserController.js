import User from '../models/User';

export default {
  async store(request, response) {
    const { name, email, password } = request.body;
    try {
      const newUser = await User.create({
        name,
        email,
        password,
      });
      return response.status(201).json(newUser);
    } catch (err) {
      return response.status(500).json(err);
    }
  },
};
