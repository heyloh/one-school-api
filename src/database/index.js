import Sequelize from 'sequelize';
import dbConfig from '../config/database';

/* Models */
import Student from '../models/Student';
import User from '../models/User';
import Picture from '../models/Picture';

const models = [Student, User, Picture];

const connection = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  logging: true,
});

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
