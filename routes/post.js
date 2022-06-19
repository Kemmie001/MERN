const express = require('express')
const router = express.Router()
const { getPosts, setPost, updatePost, deletePost } = require('../controllers/post')

router.route('/').get(getPosts).post(setPost)
router.route('/:id').put(updatePost).delete(deletePost)

module.exports = router