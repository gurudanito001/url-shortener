const { buildSchema } = require("graphql")

module.exports = buildSchema(`

    type Url {
        _id:  ID!
        url:  String!
        hash: String!
        createdAt: String!
        shortUrl: String!
    }

    type Query {
        urls: [Url!]!
    }

    type Mutation {
        shortenUrl(url: String!): Url
    }

    schema {
        query: Query
        mutation: Mutation
    }

`)