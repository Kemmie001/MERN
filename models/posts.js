const mongoose = require('mongoose')

const postSchema = mongoose.Schema(
	{
		title: {
			type: String,
			required: [true, 'Please add a title'],
		},
		text: {
			type: String,
			required: [true, 'Please add a text']
		},
	},
	{
		timestamps: true,
	},
)
module.exports = mongoose.model('Post', postSchema)