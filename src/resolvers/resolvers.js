import Query from './Query'
import Mutation from './Mutation'
import Subscription from './Subscription'

//Types
import Post from './Post'
import Comment from './Comment'
import User from './User'


const resolvers = {
    Query,
    Mutation,
    Subscription,
    Post,
    Comment,
    User
}

export { resolvers as default}