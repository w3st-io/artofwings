// [REQUIRE] //
const mongoose = require('mongoose')


const product = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	
	cat: {
		type: String,
		maxlength: 50,
		required: true,
	},

	subCat: {
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

	productAdditions: [
		{	
			type: String,
			maxlength: 50,	
		},
	],

	flavorsAvailable: {
		type: Boolean,
		required: true,
		default: false,
	},

	saucesAvailable: {
		type: Boolean,
		required: true,
		default: false,
	},

	toppingsAvailable: {
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


comment.pre('validate', function(next) {
	// [LENGTH-CHECK] Blocks //
	if (this.productAdditions.length > 20) { throw ('Error: Comment too large') }
	
	next()
})


comment.pre('updateOne', function(next) {
	// [LENGTH-CHECK] Blocks //
	if (this._update.$set.productAdditions.length > 20) {
		throw ('Error: Comment too large')
	}
	
	next()
})


// [EXPORT] //
module.exports = mongoose.model('Product', product)