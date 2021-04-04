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
		productVariantChoices: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'ProductVariant',
			},
		],

		// Product Extras //
		productExtraChoices: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'ProductExtra',
			},
		],

		// Product Additions //
		productAdditionChoices: [
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

		quantity: {
			type: Number,
			required: false,
			default: 1,
		},

		created_at: {
			type: Date,
			default: Date.now,
			maxlength: 50
		},
	})
)