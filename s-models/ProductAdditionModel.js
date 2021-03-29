// [REQUIRE] //
const mongoose = require('mongoose')


// [EXPORT] //
const productAddition = mongoose.Schema({
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
		required: false,
		description: '',
	},

	image: {
		type: String,
		maxlength: 500,
		required: false,
		default: '',
	},

	options: [
		{
			type: {
				type: String,
				maxlength: 30,
			},

			title: {
				type: String,
				maxlength: 30,
			},

			variants: [
				{
					type: String,
					maxlength: 30,
				},
			]
		}
	],

	cost: {
		type: Number,
		maxlength: 6,
		required: true,
	},

	created_at: {
		type: Date,
		default: Date.now,
		maxlength: 50
	},
})


productAddition.pre('validate', function(next) {
	// [LENGTH-CHECK] Blocks //
	if (this.options.length > 20) { throw ('Error: Too many options') }


	this.options.forEach(option => {
		if (option.variants.length > 20) { throw ('Error: Too many option variant') }
	})
	
	next()
})


productAddition.pre('updateOne', function(next) {
	// [LENGTH-CHECK] Blocks //
	if (this._update.$set.options.length > 20) {
		throw ('Error: Too many options')
	}

	this._update.$set.options.forEach(option => {
		if (option.variants.length > 2) { throw ('Error: Too many option variant') }
	})
	
	next()
})


// [EXPORT] //
module.exports = mongoose.model('ProductAddition', productAddition)