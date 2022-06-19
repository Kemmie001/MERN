const asyncHandler = require('express-async-handler')

// Get posts
// get routes /api/posts
const getPosts = asyncHandler(async (req, res) => {
	res.status(200).json({ message: 'Get posts' })
})
const setPost = asyncHandler(async (req, res) => {
	if (!req.body.text) {
		res.status(400)
		throw new Error(); ({ message: "Please andd a blog post" })
	}
	res.status(200).json({ message: 'create a post' })
})
const updatePost = asyncHandler(async (req, res) => {
	res.status(200).json({ message: `update a post ${req.params.id}` })
})
const deletePost = asyncHandler(async (req, res) => {
	res.status(200).json({ message: `delete a post ${req.params.id}` })
})
module.exports = {
	getPosts,
	setPost,
	updatePost,
	deletePost
}