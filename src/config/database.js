module.exports = {
  dialect: 'postgres',
  protocol: 'postgres',
  database: process.env.DATABASE_URL,
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
