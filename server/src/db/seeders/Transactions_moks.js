

module.exports = {
  up: (queryInterface, Sequelize) =>{
    return queryInterface.bulkInsert('Transactions', [
      {
        // id: 1,
        userId: 1,
        typeOperation: 'income',
        sum: 350,
        // createdAt: DATE.now(),
        // updatedAt: DATE.now(),
      },
      {
        userId: 2,
        typeOperation: 'income',
        sum: 350,
      },
      {
        userId: 1,
        typeOperation: 'expense',
        sum: -50,
      },
      {
        userId: 2,
        typeOperation: 'expense',
        sum: -50,
      },
    ], {});
  },
};
