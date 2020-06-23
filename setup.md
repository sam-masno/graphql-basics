# GraphQL API Setup Using GraphQL-Yoga
* install 
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.7.0"
    "babel-plugin-transform-object-rest-spread"
    "nodemon"

* add to package.json.scripts - execut babel-node and run nodemon
    "start": "nodemon src/index.js --exec babel-node"

* touch .babelrc and add it
    {
        "presets": [
            "env"
        ],
        "plugins": [
            "transform-object-rest-spread"
        ]
    }

* touch src/index.js

* install 
    "graphql-yoga": "^1.14.10" //check de
    pendency problems if using newer version

* src/index.js add
    import { GraphQLServer } from 'graphql-yoga';

* in src/index.js
    define typeDefs, resolvers
    make new server instance
    start server and pass in callback; by default will run on port 4000

* move typeDefs to own .graphql file

* nodemon does not automatically watch .graphql files, add extensions using ext argument
    "start": "nodemon src/index.js --ext js,graphql --exec babel-node"

* factor out index.js
    - resolvers: src/resolvers/EachResolver.js
        - combine all resolvers into single object and pass into GraphQLSchema in index.js
    - db: src/db.js
        - import db to index.js and add to context object to make available to all resolvers

