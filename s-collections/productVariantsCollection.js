// [REQUIRE] //
const mongoose = require('mongoose')
const validator = require('validator')


// [REQUIRE] Personal //
const ProductVariantModel = require('../s-models/ProductVariantModel')


/******************* [CRUD] *******************/
// [READ] type //
const c_readByType = async ({ type }) => {
	try {
		// [VALIDATE] type //
		if (!validator.isAscii(type)) {
			return {
				executed: true,
				status: false,
				message: 'productVariantsCollection: Invalid type',
			}
		}

		const productVariants = await ProductVariantModel.findOne({ type: type })
			.populate('options')
			.exec()

		return {
			executed: true,
			status: true,
			productVariants: productVariants,
		}
	}
	catch (err) {
		return {
			executed: false,
			status: false,
			message: `productVariantsCollection: Error --> ${err}`,
		}
	}
}


// [EXPORT] //
module.exports = {
	c_readByType,
}
