const express = require('express');
const router = express.Router();

const CommentController = require("../controller/comment_controller");
const CommentValidation = require("../middlewares/comment_validation");

router.post('/post', CommentValidation, CommentController.create);
router.get('/get', CommentController.getComments);
router.get('/get/id/:id', CommentController.getById);
router.get('/get/id_post/:post_id', CommentController.getCommentsByPostId);
router.put('/put/:id', CommentController.editCommentById);
router.delete('/delete/:id', CommentController.deleteCommentById);

module.exports = router;
