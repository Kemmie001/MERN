const jwt = require('jsonwebtoken')
const bycrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/users')


const registerUser = asyncHandler(async(req, res) => {
	const {name, email, password} = req.body

	if (!name || !password || !email){
		res.status(900)
		throw new Error('Please add all fields')
	}

	// Check if user exist
	const userExists = await User.findOne({email})

	if(userExists) {
		res.status(400)
		throw new Error('User already exists')
	}

	// Hash Password
	const salt = await bycrypt.genSalt(10)
	const hashedPassword = await bycrypt.hash(password, salt)

	// Create User
	const user = await User.create({
		name,
		email,
		password: hashedPassword
	})

	if(user){
		res.status(201).json({
			id: user._id,
			name: user.name,
			email: user.email
		})
	}else{
		res.status(404)
		throw new Error ('Invalid user details')
	}

})
const loginUser = asyncHandler(async(req, res) => {
	res.json({message: "login user"})
})
const getMe = asyncHandler(async(req, res) => {
	res.json({message: "User detail display"})
})

module.exports = {
	registerUser,
	loginUser,getMe
}