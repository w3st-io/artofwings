// [REQUIRE] //
const mongoose = require('mongoose')


// [REQUIRE] Personal //
const ProductAdditionModel = require('../s-models/ProductAdditionModel')


/******************* [CRUD] *******************/
// [READ] type //
const c_readAllByType = async (type) => {
	try {
		// [VALIDATE] cat //
		if (!validator.isAscii(type)) {
			return {
				executed: true,
				status: false,
				message: 'productAdditionsCollection: Invalid type',
			}
		}

		const products = await ProductAdditionModel.find({ type: type }).exec()

		return {
			executed: true,
			status: true,
			products: products,
		}
	}
	catch (err) {
		return {
			executed: false,
			status: false,
			message: `productAdditionsCollection: Error --> ${err}`,
		}
	}
}


// [EXPORT] //
module.exports = {
	c_readAllByType,
}
