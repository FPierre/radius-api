import { GraphQLObjectType, GraphQLSchema, GraphQLInt } from 'graphql/lib/type'

const count = 0

const schema = new GraphQLSchema({
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

export default schema
