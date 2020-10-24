module.exports = {
  up: (queryInterface, Sequelize) =>{
    return queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      typeOperation: {
        type: Sequelize.ENUM('income', 'expense'),
        allowNull: false,
      },
      sum: {
        type: Sequelize.DECIMAL,
        allowNull: false,
        validate: {
          min: 0,
        },
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false,
      },
    }).then(() => queryInterface.addConstraint('Transactions', ['sum'], {
      type: 'check',
      where: {
        sum: {
          [Sequelize.Op.gte]: 0,
        },
      },
    }));
  },
  down: (queryInterface, Sequalize) =>{
    return queryInterface.dropTable('Transactions');
  },
};


// const { query } = require("express")

// id integr
// userId integer References{model: user: (key) id} user, key- id
// typeOperation('income/expence') type.Sequalize.ENUM()
//     sum
//     createdAt
//     updatedAt

// queryInterface.createTable

// model:
// Transactions.belongsTo = function (models) {
//     Transactions.belongsTo(//models.transactions,
//       { foreignKey: 'user_id', targetKey: 'id' });


// seeders:


// router: getUserTransactions()


// module.exports = {
//     up: (queryInterface, Sequelize) =>{
//         return queryInterface.createTable('Transactions', {
//             id: {
//                 allowNull: false,
//                 autoIncrement: true,
//                 primaryKey: true,
//                 type: Sequalize.INTEGER,
//             },
//             userId: {
//                 type: Sequalize.INTEGER,
//                 allowNull: false,
//                 references: {
//                     model: 'Users',
//                     key: 'id',
//                 }
//             },
//             typeOperation: {
//                 type: Sequalize.ENUM('income','expense'),
//                 allowNull: false,
//             },
//             sum: {
//                 type: Sequalize.DECIMAL,
//                 validate: {
//                     min: 0
//                 }
//             },
//             createdAt: {
//                 type: Sequalize.DATE,
//                 //defaultValue: Sequalize.NOW
//             },
//             updatedAt: {
//                 type: Sequalize.DATE,
//                 //defaultValue: Sequalize.NOW
//             }
//         })
//     },
//     down: (queryInterface, Sequalize) =>{
//         return queryInterface.dropTable('Transactions');
//     },
// };


