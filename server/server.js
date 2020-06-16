require("dotenv").config();
var express = require("express");
var graphqlHTTP = require("express-graphql");
const { makeExecutableSchema } = require("graphql-tools");
const { readFileSync } = require("fs");
const { join } = require("path");
const resolvers = require("./lib/resolvers");
const cors = require("cors");
const path = require('path');

const typeDefs = readFileSync(
  join(__dirname, "lib", "schema.graphql"),
  "utf-8"
);
const schema = makeExecutableSchema({ typeDefs, resolvers });

var app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, 'resources/images')));
app.use(
  "/api",
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

app.listen(4000, () => console.log("localhost:4000/api"));
