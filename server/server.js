const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');
// import our typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;
const app = express();


const startServer = async () => {
  // create a new Apollo server and pass in our schema data
  const server = new ApolloServer({ 
    typeDefs, 
    resolvers, 
    context: authMiddleware 
  });

  // Start the Apollo server
  await server.start();

  // integrate our Apollo server with the Express application as middleware
  server.applyMiddleware({ app });

  // log where we can go to test our GQL API
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
};

/*
mongoose.connect('mongodb+srv://admin:Admin123456@cluster0.r8f3b.mongodb.net/GoogleBooks?retryWrites=true&w=majority')
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.log('Error', err))
*/

// Initialize the Apollo server
startServer();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());



db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});