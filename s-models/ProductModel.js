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
		required: false,
		description: '',
	},

	image: {
		type: String,
		maxlength: 1000,
		required: false,
		default: '',
	},

	cost: {
		type: Number,
		maxlength: 6,
		required: true,
	},

	productVariantTypes: [
		{
			type: String,
			maxlength: 20,	
		},
	],

	productExtrasTypes: [
		{
			type: String,
			maxlength: 20,	
		},
	],

	productAdditionsTypes: [
		{
			type: String,
			maxlength: 20,	
		},
	],

	created_at: {
		type: Date,
		default: Date.now,
		maxlength: 50
	},
})


product.pre('validate', function(next) {
	// [LENGTH-CHECK] Blocks //
	if (this.productVariantTypes.length > 20) { throw ('Error: Comment too large') }
	
	next()
})


product.pre('updateOne', function(next) {
	// [LENGTH-CHECK] Blocks //
	if (this._update.$set.productVariantTypes.length > 20) {
		throw ('Error: Comment too large')
	}
	
	next()
})


// [EXPORT] //
module.exports = mongoose.model('Product', product)