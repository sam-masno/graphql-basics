const Post = {
    author: (parent, args, { db: { comments, users, posts} }, info) => users.filter(user => user.id === parent.author)[0],
    comments: (parent, args, { db: { comments, users, posts} }, info) => comments.filter(comment => comment.post === parent.id)
}

export { Post as default }