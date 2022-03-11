const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type Query {
    me: User
    users: [User]
    user(username: String!): User
  }

  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
    password: String
  }

  type Book {
    title: String
    description: String
    authors: [String]
    image: String
    link: String
    bookId: String
   
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;