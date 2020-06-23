const Subscription = {
     //instead of resolve function use subscribe
        // subscribe will be a method passed into subscription
    comment: {
        // add subscribe method to comment subscription
        // this will create subscription channel for post
        subscribe(parent, { postId }, { db: { posts }, pubsub }, info ) {
            //get post 
            const subscribedPost = posts.filter(post => post.id === postId)[0]
            if(!subscribedPost) throw new Error('Post does not exist');

            //return async Iterator to that posts comment channel
            return pubsub.asyncIterator(`comment${postId}`)
        }
    },
    post : {
        subscribe(parent, { userId }, {db: { users }, pubsub}, info) {
            const user = users.some(user => user.id === userId);
            if(!user) throw new Error('User does not exist')

            //return async Iterator to that user's post channel
            return pubsub.asyncIterator(`posts${userId}`)
        }
    }
}

export { Subscription as default }