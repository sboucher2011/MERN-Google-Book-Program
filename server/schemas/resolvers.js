const Book = require('../models/Book');

const resolvers = {
    Query: {
      books: () => {
        return 'Hello world!';
      }
    }
  };
  
  module.exports = resolvers;