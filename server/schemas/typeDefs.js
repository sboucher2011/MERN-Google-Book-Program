const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type Query {
    books: String
    users: [User]
    user(username: String!): User
  }

  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    title: String
  }

  type Mutation {
    addBook(title: String!): Book
    login(email: String!, password: String!): User
    addUser(username: String!, email: String!, password: String!): User
  }
`;

module.exports = typeDefs;