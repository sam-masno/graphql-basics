const Comment = {
    author: (parent, args, { db: { comments, users, posts} }, info) => users.filter(user => user.id === parent.author)[0],
    post: (parent, args, { db: { comments, users, posts} }, info) => posts.filter(post => post.id === parent.post)[0]
}

export { Comment as default }