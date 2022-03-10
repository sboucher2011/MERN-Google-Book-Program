const Book = require('../models/Book');
const User = require('../models/User');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    Query: {
      books: () => {
        return 'Hello world!';
      }
    },

    Mutation: {
      addBook: (args) => {
        return {
          title: args.title
        }
      },
      addUser: async (parent, args) => {
        const user = await User.create(args);
      
        return user;
      },
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
      
        if (!user) {
          throw new AuthenticationError('Incorrect credentials');
        }
      
        const correctPw = await user.isCorrectPassword(password);
      
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
      
        return user;
      }
    }
  };
  
  module.exports = resolvers;