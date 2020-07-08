const users = [
    {"id": "1", name: "Molls", posts: ["99", "88"]},
    {"id": "2", name: "Sam", posts: ["77", "66"]},
    {"id": "3", name: "Bill", posts: ["55", "44"]}
]
const posts = [
    {id: "99", name: "Post 1" ,author: "1"},
    {id: "88", name: "Post 2", author: "1"},
    {id: "77", name: "Post 3", author: "2"},
    {id: "66", name: "Post 4", author: "2"},
    {id: "55", name: "Post 5", author: "3"},
    {id: "44", name: "Post 6", author: "3"}
]

const comments = [
    {id: "111", post: "99" ,author: "1", body: 'comment 1'},
    {id: "222", post: "99" ,author: "1", body: 'comment 2'},
    {id: "333", post: "88" ,author: "2", body: 'comment 3'},
    {id: "444", post: "88" ,author: "2", body: 'comment 4'},
    {id: "555", post: "77" ,author: "3", body: 'comment 5'},
    {id: "666", post: "77" ,author: "3", body: 'comment 6'},
]

const db = {
    users,
    posts,
    comments
}

export { db as default }
