const { graphql, GraphQLID, GraphQLString } = require('graphql')
const { projects, clients} = require('../sampleData')

const { GrahQlObjectType } =  require(graphql);

const ClientType = new GrahQlObjectType({
    name: 'Client',
    fields: () => ({
        id: { type: GraphQLID},
        name: { type: GraphQLString},
        email: { type: GraphQLString},
        phone: { type: GraphQLString}
    })
});