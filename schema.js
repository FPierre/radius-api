const { GraphQLObjectType, GraphQLSchema, GraphQLInt } = require('graphql')

const count = 0

exports.schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      count: {
        type: GraphQLInt,
        resolve: function () {
          return count
        }
      }
    }
  })
})
