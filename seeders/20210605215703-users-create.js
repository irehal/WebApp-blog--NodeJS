const faker = require('faker');

const users = [...Array(20)].map((user) => (
  {
    username : faker.internet.userName(),
    email : faker.internet.email(),
    password : faker.internet.password(),
    role : faker.random.arrayElement(['admin' , 'author' , 'author' , 'author' , 'author' , 'guest' , 'guest' , 'guest' , 'guest' , 'guest' ]),
    createdAt : new Date(),
    updatedAt : new Date()
  }
))

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users',users,{});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users',null,{});
  },
};
