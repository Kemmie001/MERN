const asyncHandler = require('express-async-handler')
const Post = require('../models/posts')
const User = require('../models/users')
const { use } = require('../routes/auth')

// Get posts
// get routes /api/posts
const getPosts = asyncHandler(async (req, res) => {
	const posts = await Post.find({user: req.user.id})

	res.status(200).json(posts)
})
const setPost = asyncHandler(async (req, res) => {
	if (!req.body.text && !req.body.title) {
		res.status(400)
		throw new Error(); ({ message: "Please and a blog post" })
	}
	const post = await Post.create({
		title: req.body.title,
		text: req.body.text,
		user: req.user.id
	})
	res.status(200).json(post)
})
const updatePost = asyncHandler(async (req, res) => {
	const post = await Post.findById(req.params.id)
	if (!post) {
		res.status(400)
		throw new Error("Post not found")
	}

	const user = await User.findById(req.user.id)

	// check for user
	if(!user){
		res.status(401)
		throw new Error("User not found")
	}

	// Make sure the loggedin user matchches the goal user
	if(post.user.toString() !== user.id){
		res.status(401)
		throw new Error("User not authorized")
	}

	const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
		new: true
	})
	res.status(200).json(updatedPost)
})
const deletePost = asyncHandler(async (req, res) => {
	const post = await Post.findById(req.params.id)
	if (!post) {
		res.status(400)
		throw new Error("Post not found")
	}

	const user = await User.findById(req.user.id)

	// check for user
	if(!user){
		res.status(401)
		throw new Error("User not found")
	}

	// Make sure the loggedin user matchches the goal user
	if(post.user.toString() !== user.id){
		res.status(401)
		throw new Error("User not authorized")
	}

	await post.remove()
	res.status(200).json({ id: req.params.id, message: 'Post has been deleted'})
})
module.exports = {
	getPosts,
	setPost,
	updatePost,
	deletePost
}