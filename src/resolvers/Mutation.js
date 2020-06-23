import { v4  } from 'uuid'

const Mutation = {
    createUser: (parent, { data: { name }}, { db: { comments, users, posts} }, info) => {
        const id = v4()
        const newUser = {
            id, 
            name: name,  
            posts: []
        }
        users.push(newUser);
        return users
    },
    createPost: (parent, { data: { author, name}}, { db: { comments, users, posts}, pubsub }, info) => {
        if(!users.some(user => user.id === author)) throw new Error('User not found')
        const id = v4();
        const newPost = {
            id,
            author,
            name
        }
        posts.push(newPost);
        //publish newPost. make sure to match channel and subscription resolver
        pubsub.publish(`posts${author}`, { post: newPost })

        return posts
    },
    createComment: (parent, { data: { author, post, body } }, { db: { comments, users, posts}, pubSub }, info) => {
        const id = v4();
        const newComment = {
            id,
            author: author,
            post: post,
            body: body
        }
        comments.push(newComment);
        //publish comment to post channel
        //make sure to match channel and subscription resolver
        pubSub.publish(`comment${post}`, { comment: newComment })
        return comments
    }
}

export { Mutation as default }