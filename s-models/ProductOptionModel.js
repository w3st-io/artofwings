// [REQUIRE] //
const mongoose = require('mongoose')


const productVariant = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,

	type: {
		type: String,
		maxlength: 50,
		required: false,
		default: '',
	},

	name: {
		type: String,
		maxlength: 100,
		required: true,
	},

	description: {
		type: String,
		maxlength: 500,
		required: false,
		default: '',
	},

	image: {
		type: String,
		maxlength: 500,
		required: false,
		default: '',
	},

	options: [
		{
			name: {
				type: String,
				required: true,
				maxlength: 100,
			},

			description: {
				type: String,
				required: false,
				maxlength: 500,
				default: '',
			},

			image: {
				type: String,
				required: false,
				maxlength: 500,
				default: '',
			},

			cost: {
				type: Number,
				required: false,
				maxlength: 10,
				default: 0.00,
			},
		}
	],

	created_at: {
		type: Date,
		default: Date.now,
		maxlength: 50
	},
})


productVariant.pre('validate', function (next) {
	// [LENGTH-CHECK] Blocks //
	if (this.options.length > 20) { throw ('Error: Too many options') }
	
	next()
})


productVariant.pre('updateOne', function (next) {
	// [LENGTH-CHECK] Blocks //
	if (this._update.$set.options.length > 20) { throw ('Error: Too many options') }
	
	next()
})


// [EXPORT] //
module.exports = mongoose.model('ProductOption', productVariant)