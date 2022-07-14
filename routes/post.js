const express = require('express')
const router = express.Router()
const { getPosts, setPost, updatePost, deletePost } = require('../controllers/post')

const {protect} = require('../middleware/authMiddleware')
router.route('/').get(protect, getPosts).post(protect, setPost)
router.route('/:id').put(protect, updatePost).delete(protect, deletePost)

module.exports = router