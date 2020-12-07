require('dotenv').config();

/* Changes for deployment */

module.exports = {
  dialect: 'postgres',
  host: process.env.DATABASE_HOST || 'localhost',
  port: process.env.DATABASE_PORT || '5432',
  username: process.env.DATABASE_USERNAME || 'postgres',
  password: process.env.DATABASE_PWD || 'docker',
  database: process.env.DATABASE || 'school',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
  dialectOptions: {
    timezone: 'America/Sao_Paulo',
  },
  timezone: 'America/Sao_Paulo',
};
