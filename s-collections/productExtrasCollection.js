// [REQUIRE] //
const mongoose = require('mongoose')
const validator = require('validator')


// [REQUIRE] Personal //
const ProductExtraModel = require('../s-models/ProductExtraModel')


/******************* [CRUD] *******************/
// [READ] type //
const c_readByType = async ({ type }) => {
	try {
		// [VALIDATE] cat //
		if (!validator.isAscii(type)) {
			return {
				executed: true,
				status: false,
				message: 'productExtrasCollection: Invalid type',
			}
		}

		const productExtras = await ProductExtraModel.findOne({ type: type })
		.exec()

		return {
			executed: true,
			status: true,
			productExtras: productExtras,
		}
	}
	catch (err) {
		return {
			executed: false,
			status: false,
			message: `productExtrasCollection: Error --> ${err}`,
		}
	}
}


// [EXPORT] //
module.exports = {
	c_readByType,
}
