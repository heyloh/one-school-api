import User from '../models/User';

export default {
  async index(request, response) {
    try {
      const users = await User.findAll({ attributes: ['id', 'name', 'email'] });
      return response.status(200).json(users);
    } catch (err) {
      return response.status(400).json({ message: 'Something went wrong.' });
    }
  },

  async store(request, response) {
    try {
      const { name, email, password } = request.body;

      const newUser = await User.create({
        name,
        email,
        password,
      });
      return response.status(201).json(newUser);
    } catch (err) {
      return response.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  },

  async show(request, response) {
    try {
      const user = await User.findByPk(request.params.id);

      if (!user) {
        return response.status(404).json({
          errors: ['User not found.'],
        });
      }

      const { id, name, email } = user;

      return response.status(200).json({ id, name, email });
    } catch (err) {
      return response.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  },

  async update(request, response) {
    try {
      const id = request.user_id;

      const { name, email, password } = request.body;

      if (!name && !email && !password) {
        return response.status(400).json({
          errors: ['Could not update.'],
        });
      }

      const user = await User.findByPk(id);

      if (!user) {
        return response.status(404).json({
          errors: ['User not found.'],
        });
      }

      const updatedUser = await user.update({
        name: name || user.name,
        email: email || user.email,
        password: password || user.password,
      });

      return response.status(200).json(updatedUser);
    } catch (err) {
      return response.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  },

  async delete(request, response) {
    try {
      const { id } = request.params;

      if (!id) {
        return response.status(400).json({
          errors: ['Id is missing.'],
        });
      }

      const user = await User.findByPk(id);

      if (!user) {
        return response.status(404).json({
          errors: ['User not found.'],
        });
      }

      await user.destroy();

      return response.status(200).json({ message: 'User deleted successfully.' });
    } catch (err) {
      return response.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  },
};
