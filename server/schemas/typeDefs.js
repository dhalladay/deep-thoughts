// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our own typeDefs
const typeDefs = gql`
  type Query {
    helloWorld: String
  }
`;

// export the typeDefs
module.exports = typeDefs;