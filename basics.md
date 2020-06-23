# Basic flow of GraphQL Yoga
GraphQL is a query language that enables interacting with the data in a server in a modular fashion from a single endpoint as opposed to the fixed methods of typical RESTful API with numerous endpoint.

The client will specify in each request exactly what properties it is wants based on types defined in the API.
The actions carried out by the API are defined in the resolvers. The resolver is an equivalent of controllers in the RESTful API paradigm

## Create a Server Object
Most likely in src/index.js, create a new server object using the GraphQLServer constructor from graphql-yoga.
This constructor will take at least 2 arguments: resolvers and typeDefs that will be covered shortly.

In addition, an object can be assigned to the context property. This prop will be passed to all resolvers in all types. This is especially useful for passing any db or constants.

## Define Types Using
In a src/schema.graphql file, define all types, mutations, and queries in graphql syntax. In the server object, pass typeDefs property the absolute file path of the schema file.

## Create resolver
In src/resolvers/resolver.js, create and export a resolver object that will contain all methods for resolving queries and mutations.

For Query, Mutation, and all data type resolvers, make a seperate file and export them to the resolvers object.

pass the resolvers object as the resolvers property in the server instance in index.js

## Main Operators
* For each operation define type, then inside add operation names in typeDefs, ensuring to include all afgs and type values.
* Define resolver in respective file for each operation and data type
1. Query - fetch data from the server 
2. Mutation - make any changes to data in the db
3. Subscriptions - push changes to clients that are connected via websockets to the server
- Additional subscription reqs:
    * create new PubSub (import from graphql-yoga) instance and pass into context of server constructor
    * in subscription resolver create property with name from typeDef.Subscription.
    * define subscribe method in this property
    * after necessary checks open channel 
        - return pubSub.asyncIterator(`comment${postId}`)
    * when publishing(most likely form mutation) push new object to channel
        - pubSub.publish(`Channel Name`, { subscriptionName: update })
        - update will be pushed to any subscribers