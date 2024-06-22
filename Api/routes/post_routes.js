const express = require('express');
const router = express.Router();

const PostController = require("../controller/post_controller");
const PostValidation = require("../middlewares/post_validation");

router.post('/post', PostValidation, PostController.create);
router.get('/get', PostController.getPosts);
router.get('/get/email/:email', PostController.getByEmail);
router.get('/get/id/:id', PostController.getById);
router.put('/put/:id', PostController.editPostById)
router.delete('/delete/:id', PostController.deletePostById);

module.exports = router;
