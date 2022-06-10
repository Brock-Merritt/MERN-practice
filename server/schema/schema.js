const { graphql, GraphQLID, GraphQLString, GraphQLSchema } = require('graphql')
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

const RootQuery = new GrahQlObjectType({
    name: 'RootQueryType',
    fields: {
        client: {
            type: ClientType,
            args: { id: { type: GraphQLID } },
            resolve: (parent, args) => { 
                return clients.find(client => client.id === args.id)
            }
        }

    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})