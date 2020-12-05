import Sequelize from 'sequelize';
import dbConfig from '../config/database';

/* Models */
import Student from '../models/Student';
import User from '../models/User';

const models = [Student, User];

const connection = new Sequelize(dbConfig);

models.forEach((model) => model.init(connection));
