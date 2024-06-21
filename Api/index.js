const express = require('express');
const server = express();

server.use(express.json());

const db = require('./database/db');

const PostRoutes = require('./routes/post_routes');

server.use('/posts', PostRoutes)

server.listen(3000, ()=>{
    console.log('API ONLINE');
});