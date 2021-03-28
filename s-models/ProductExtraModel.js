// [REQUIRE] //
const mongoose = require('mongoose')


// [EXPORT] //
module.exports = mongoose.model(
	'ProductExtra',
	mongoose.Schema({
		_id: mongoose.Schema.Types.ObjectId,

		type: {
			type: String,
			maxlength: 50,
			required: true,
		},

		title: {
			type: String,
			maxlength: 100,
			required: true,
		},

		description: {
			type: String,
			maxlength: 500,
			required: true,
		},

		image: {
			type: String,
			maxlength: 1000,
			required: true,
		},

		cost: {
			type: Number,
			maxlength: 6,
			required: true,
		},

		hasProductAddition: {
			type: Boolean,
			required: true,
			default: false,
		},

		created_at: {
			type: Date,
			default: Date.now,
			maxlength: 50
		},
	})
)