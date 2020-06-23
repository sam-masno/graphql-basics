const Query = {
    /**
     every resolver is passed 4 arguments: parent, args, context, and info
     */
    getPosts: (parent, args, { db: { users, posts, comments }}) => posts,
    getUsers: (parent, args, { db: { users, posts, comments }}) => users,
    comments: (parent, args, { db: { users, posts, comments }}) => comments
}

export { Query as default }