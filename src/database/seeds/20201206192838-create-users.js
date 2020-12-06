const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Lohana',
        email: 'loh@email.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Elza',
        email: 'elza@email.com',
        password_hash: await bcryptjs.hash('senha', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Angela',
        email: 'angela@email.com',
        password_hash: await bcryptjs.hash('123senha', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  down: async () => {},
};
