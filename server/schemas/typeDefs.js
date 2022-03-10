const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type Query {
    books: String
  }

  type Book {
    title: String
  }
`;

module.exports = typeDefs;