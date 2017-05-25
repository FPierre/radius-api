const { GraphQLObjectType, GraphQLSchema, GraphQLInt } = require('graphql')

let count = 0

exports.schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      count: {
        type: GraphQLInt,
        resolve: () => count
      }
    }
  })
})
