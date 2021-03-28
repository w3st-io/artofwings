// [REQUIRE] //
const mongoose = require('mongoose')


// [EXPORT] //
module.exports = mongoose.model(
	'OrderItem',
	mongoose.Schema({
		_id: mongoose.Schema.Types.ObjectId,

		product_id: {
			type: String,
			maxlength: 50,
			required: true,
		},

		boneless: {
			type: Boolean,
			required: true,
			default: false,
		},

		productAdditions: [
			{
				productAddition_id: {
					type: String,
					maxlength: 25,
					required: true,
				},

				productAdditionFlavor: {
					type: String,
					maxlength: 20,
				}
			},
		],

		quantity: {
			type: Number,
			required: true,
			default: 1,
		},

		created_at: {
			type: Date,
			default: Date.now,
			maxlength: 50
		},
	})
)