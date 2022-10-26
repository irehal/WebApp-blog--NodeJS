
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const faker = require('faker');

    function getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    const users = [...Array(20)].map((user) => (
      {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        role: faker.random.arrayElement(['admin', 'author', 'author', 'author', 'author', 'guest', 'guest', 'guest', 'guest', 'guest']),
        createdAt: faker.date.past(21, new Date()),
        updatedAt: new Date(),
      }
    ))

    const tags = [...Array(10)].map((tag) => (
      {
        name: faker.random.arrayElement(['book', 'post', 'object']),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ))

    var articles = [];
    var i = 1;
    for (let k = 0; k < 20; k++) {
      var Nbr_articles = getRndInteger(2, 10);
      for (let pas = 0; pas < Nbr_articles; pas++) {
        let art = {
            id : i,
            title: faker.name.title(),
            content: faker.lorem.sentence(),
            published: getRndInteger(1,255),
            createdAt: faker.date.past(21, new Date()),
            updatedAt: new Date(),
            UserId: k + 1,
          }
        articles.push(art);
        i = i+1;
      }
    }

    var comments = [];
    var j=1;
    for (let k = 0; k < articles.length; k++) {
      var Nbr_comments = getRndInteger(0, 10);
      for (let pas = 0; pas < Nbr_comments; pas++) {
        let com = {
            id : j,
            content: faker.lorem.sentence(),
            createdAt: faker.date.past(21, new Date()),
            updatedAt: new Date(),
            ArticleId: k + 1,
            UserId: getRndInteger(1,20)
          }
        comments.push(com);
        j = j + 1;
      }
    }

    var articletags = [];
    for (let k = 0; k < articles.length; k++) {
      var Nbr_tags = getRndInteger(2, 6);
      for (let pas = 0; pas < Nbr_tags; pas++) {
        let artictag = {
            createdAt: faker.date.past(21, new Date()),
            updatedAt: new Date(),
            ArticleId: k + 1,
            TagId: pas+1
          }
        articletags.push(artictag);
      }
    }

    queryInterface.bulkInsert('Users', users, {});
    queryInterface.bulkInsert('tags', tags, {});
    queryInterface.bulkInsert('articles', articles, {});
    queryInterface.bulkInsert('comments', comments, {});
    queryInterface.bulkInsert('articletags', articletags, {});
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('Users', null, {});
    queryInterface.bulkInsert('tags', null, {});
    queryInterface.bulkInsert('acticles', null, {});
    queryInterface.bulkInsert('comments', null, {});
    queryInterface.bulkInsert('articletags', null, {});
  }
};
