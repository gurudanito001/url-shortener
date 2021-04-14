const express = require("express");
const graphqlHttp = require("express-graphql");
const graphqlSchema = require("./graphql/schema");
const graphqlResolvers = require("./graphql/resolvers");
const mongoose = require("mongoose");
const urlRouter = require("./routes/url");
const config = require('./config');

const app = express()

app.use(
    "/graphiql",
    graphqlHttp.graphqlHTTP({
        schema: graphqlSchema,
        rootValue: graphqlResolvers,
        graphiql: true,
    })
)
app.use('/', urlRouter);

mongoose
    .connect(config.ATLAS_URI, config.OPTIONS)
    .then(() =>  console.log("Database Connection Successful"))
    .catch( error => {
        throw error
    })

app.listen(config.PORT, () => console.log(`Server is running on localhost: ${config.PORT}`))