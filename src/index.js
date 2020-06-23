import { GraphQLServer, PubSub } from 'graphql-yoga'
import db from './db'
import resolvers from './resolvers/resolvers'

const pubsub = new PubSub()

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: {
        db,
        pubsub
    }
})

//set server object to listen
server.start(() => console.log('Server works'))