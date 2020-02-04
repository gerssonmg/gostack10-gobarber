import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import rootQuery from './modules/rootQuery';
import rootMunation from './modules/rootMutation';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fiels: {
      ...rootQuery,
    },
  }),
  mutation: new GraphQLObjectType({
    name: 'RootMutationType',
    fields: {
      ...rootMunation,
    },
  }),
});
