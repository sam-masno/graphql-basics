const User = {
    posts: (parent, args, { db: { comments, users, posts} }, info) => posts.filter(post => post.author === parent.id)
}

export { User as default }