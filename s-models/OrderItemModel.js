// [REQUIRE] //
const mongoose = require('mongoose')


// [EXPORT] //
module.exports = mongoose.model(
	'OrderItem',
	mongoose.Schema({
		_id: mongoose.Schema.Types.ObjectId,

		product: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Product',
			required: true,
		},

		// Product Variants //
		productVariants: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'ProductVariant',
			},
		],

		variantsTotalCost: {
			type: Number,
			maxlength: 4,
			required: true,
			default: 0,
		},

		// Product Extras //
		productExtras: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'ProductExtra',
			},
		],

		productExtrasTotalCost: {
			type: Number,
			maxlength: 4,
			required: true,
			default: 0,
		},

		// Product Additions //
		productAdditions: [
			{
				productAddition: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'ProductAddition',
				},

				variant: {
					type: String,
					maxlength: 20,
				}
			},
		],

		productAdditionsTotalCost: {
			type: Number,
			maxlength: 4,
			required: true,
			default: 0,
		},

		quantity: {
			type: Number,
			required: true,
			default: 1,
		},

		preTaxTotal: {
			type: Number,
			required: true,
		},

		taxTotal: {
			type: Number,
			required: true,
		},

		orderTotal: {
			type: Number,
			required: true,
		},

		created_at: {
			type: Date,
			default: Date.now,
			maxlength: 50
		},
	})
)