import Student from '../models/Student';

export default {
  async index(request, response) {
    const students = await Student.findAll({
      attributes: [
        'id',
        'name',
        'surname',
        'email',
        'age',
        'weight',
        'height',
      ],
    });

    return response.status(200).json(students);
  },

  async show(request, response) {
    try {
      const { id } = request.params;
      if (!id) {
        return response.status(400).json({
          errors: ['Id is missing.'],
        });
      }
      const student = await Student.findByPk(id);

      if (!student) {
        return response.status(400).json({
          errors: ['Student does not exist.'],
        });
      }

      const {
        name, surname, email, age, weight, height,
      } = student;

      return response.status(200).json({
        id,
        name,
        surname,
        email,
        age,
        weight,
        height,
      });
    } catch (err) {
      return response.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  },

  async store(request, response) {
    try {
      const student = await Student.create(request.body);

      if (!student) {
        return response.status(400).json({
          errors: ['Student does not exist.'],
        });
      }

      const {
        id, name, surname, email, age, weight, height,
      } = student;

      return response.status(200).json({
        id,
        name,
        surname,
        email,
        age,
        weight,
        height,
      });
    } catch (err) {
      return response.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  },

  async update(request, response) {
    try {
      const { id } = request.params;
      if (!id) {
        return response.status(400).json({
          errors: ['Id is missing.'],
        });
      }

      const student = await Student.findByPk(id);

      const {
        name, surname, email, age, weight, height,
      } = request.body;

      if (!name && !surname && !email && !age && !weight && !height) {
        return response.status(400).json({
          errors: ['Could not update.'],
        });
      }

      if (!student) {
        return response.status(400).json({
          errors: ['Student does not exist.'],
        });
      }

      await student.update(request.body);

      return response.status(200).json({
        id,
        name,
        surname,
        email,
        age,
        weight,
        height,
      });
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
      const student = await Student.findByPk(id);

      if (!student) {
        return response.status(400).json({
          errors: ['Student does not exist.'],
        });
      }

      await student.destroy();
      return response.status(200).json({ message: 'Student deleted successfully.' });
    } catch (err) {
      return response.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  },
};
