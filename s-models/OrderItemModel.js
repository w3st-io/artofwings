// [REQUIRE] //
const mongoose = require('mongoose')

module.exports = mongoose.model(
	'OrderItem',
	mongoose.Schema({
		_id: mongoose.Schema.Types.ObjectId,

		// [REF] Product //
		product: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Product',
			required: true,
		},

		// [REF] ProductVariant //
		productVariants: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'ProductVariant',
			},
		],

		// [REF] ProductExtra //
		productExtras: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'ProductExtra',
			},
		],

		// Product Additions //
		productAdditions: [
			{
				// [OBJECT_ID] //
				productAddition: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'ProductAddition',
				},

				// [REF] ProductVariant //
				productAdditionVariants: [
					{
						type: mongoose.Schema.Types.ObjectId,
						ref: 'ProductVariant',
					},
				],

				// [REF] ProductExtra //
				productAdditionExtras: [
					{
						type: mongoose.Schema.Types.ObjectId,
						ref: 'ProductExtra',
					},
				],
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