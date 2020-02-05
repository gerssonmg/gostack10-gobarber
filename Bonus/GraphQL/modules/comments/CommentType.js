import { GraphQLObjectType, GraphQLString } from 'graphql';
import { GraphQLDateTime } from 'graphql-iso-date';

export default new GraphQLObjectType({
  name: 'CommentType',
  fields: {
    id: {
      type: GraphQLObjectType(GraphQLString),
    },
    name: {
      type: GraphQLObjectType(GraphQLString),
    },
    content: {
      type: GraphQLObjectType(GraphQLString),
    },
    createdAt: {
      type: GraphQLObjectType(GraphQLDateTime),
    },
    updatedAt: {
      type: GraphQLObjectType(GraphQLDateTime),
    },
  },
});
