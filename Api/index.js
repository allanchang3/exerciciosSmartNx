const express = require('express');
const server = express();

server.use(express.json());

const db = require('./database/db');

const PostRoutes = require('./routes/post_routes');

const CommentRoutes = require('./routes/comment_routes');

server.use('/posts', PostRoutes);

server.use('/comments', CommentRoutes);

server.listen(3000, ()=>{
    console.log('API ONLINE');
});