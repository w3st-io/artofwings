// [REQUIRE] //
const mongoose = require('mongoose')


// [EXPORT] //
const productAddition = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,

	cat: {
		type: String,
		maxlength: 50,
		required: false,
		default: '',
	},

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
		description: '',
	},

	image: {
		type: String,
		maxlength: 500,
		required: false,
		default: '',
	},

	productVariants: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'ProductVariant',
			required: true,
		}
	],

	productExtras: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'ProductExtra',
			required: true,
		}
	],

	productAdditions: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'ProductAddition',
			required: true,
		}
	],

	cost: {
		type: Number,
		maxlength: 6,
		required: false,
		default: 0.00,
	},

	created_at: {
		type: Date,
		default: Date.now,
		maxlength: 50
	},
})


productAddition.pre('validate', function (next) {
	// [LENGTH-CHECK] Blocks //
	if (this.productVariants.length > 20) { throw ('Error: too many variants') }

	if (this.productExtras.length > 20) { throw ('Error: too many extras') }
	
	if (this.productAdditions.length > 20) { throw ('Error: too many additions') }
	
	next()
})
	
	
productAddition.pre('updateOne', function (next) {
	// [LENGTH-CHECK] Blocks //
	if (this._update.$set.productVariants.length > 20) {
		throw ('Error: too many variants')
	}

	if (this._update.$set.productExtras.length > 20) {
		throw ('Error: too many extras')
	}

	if (this._update.$set.productAddition.length > 20) {
		throw ('Error: too many additions')
	}
	
	next()
})


// [EXPORT] //
module.exports = mongoose.model('ProductAddition', productAddition)