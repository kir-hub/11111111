const bcrypt = require('bcrypt');
const SALT = 6;

const firstNames = [];


const lastNames = [];


function generateUsers(count) {
  const users =[];
  for (let i=0; i < count; i++){
    const surname = lastNames[Math.floor(Math.random()*lastNames.length)];
    users.push({
      firstName: firstNames[Math.floor(Math.random()*lastNames.length)],
      lastName: surname,
      displayName: `${surname}`,
      email: `user_${surname}${i}@gmail.com`,
      avatar: '',
      password: bcrypt.hashSync('Qwerty1234', bcrypt.genSalt(SALT)),
      rating: 0,
      balance: 0,
      role: [Math.floor(Math.random(1.2)],

    });
  }
  return users;
}

module.exports = {
    up: (queryInterface, Sequelize) =>{
        return queryInterface.bulkInsert('Users', generateUsers(20), {});
    },
    down: (queryInterface, Sequelize) =>{
        return queryInterface.bulkInsert('Users', null, {})
    },
};
