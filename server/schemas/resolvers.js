const { Book, User } = require('../models');

const resolvers = {
  Query: {
    Book: async () => {
      return Book.find({});
    },
    User: async () => {
      return Book.find({});
    },
  },
  Mutation: {

  },
};

module.exports = resolvers;
