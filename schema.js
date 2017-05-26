import { GraphQLObjectType, GraphQLSchema, GraphQLInt } from 'graphql'

let count = 0

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      count: {
        type: GraphQLInt,
        description: 'The count!',
        resolve: () => count
      }
    }
  }),
  mutation: new GraphQLObjectType({
    name: 'RootMutationType',
    fields: {
      updateCount: {
        type: GraphQLInt,
        description: 'Updates the count',
        resolve: () => {
          count += 1
          return count
        }
      }
    }
  })
})
