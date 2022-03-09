const { AuthenticationError } = require('apollo-server-express');
const { model } = require('mongoose');
const { User, Thought } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {

};

module.exports = resolvers;