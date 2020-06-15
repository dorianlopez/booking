var express = require('express');
var graphqlHTTP = require('express-graphql');
const { makeExecutableSchema } = require('graphql-tools')
const { readFileSync } = require('fs');
const { join } = require('path');
const resolvers = require('./lib/resolvers')

const typeDefs = readFileSync(join(__dirname,'lib','schema.graphql'),'utf-8');
const schema = makeExecutableSchema({ typeDefs, resolvers })

var app = express();

app.use('/api', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true,
}));

app.listen(4000, () => console.log('localhost:4000/api'));