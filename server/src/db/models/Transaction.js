const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) =>{
  const Transactions = sequelize.define('Transactions', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    typeOperation: {
      type: DataTypes.ENUM('income', 'expense'),
      allowNull: false,
    },
    sum: {
      type: DataTypes.DECIMAL,
      validate: {
        min: 0,
      },
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.fn('now'),
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.fn('now'),
    },
  }

  , { timestamps: true }
  );


  Transactions.associate = function (models) {
    Transactions.belongsTo(models.User,
      { foreignKey: 'userId' });// это поле из нашей таблицы связывается с таблицей юзеров
  };
  return Transactions;
};
