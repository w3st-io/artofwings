// [REQUIRE] //
const mongoose = require('mongoose')
const validator = require('validator')


// [REQUIRE] Personal //
const ProductAdditionModel = require('../s-models/ProductAdditionModel')


/******************* [CRUD] *******************/
// [READ] Cats //
const c_readByCat = async ({ cat }) => {
	try {
		// [VALIDATE] cat //
		if (!validator.isAscii(cat)) {
			return {
				executed: true,
				status: false,
				message: 'productAdditionsCollection: Invalid cat',
			}
		}

		const productAdditions = await ProductAdditionModel.find({ cat: cat })
			.populate({
				path: 'productVariants',
				populate: { path: 'options' }
			})
			.populate({
				path: 'productExtras',
				populate: { path: 'options' }
			})
			.populate('productAdditions')
			.exec()

		return {
			executed: true,
			status: true,
			productAdditions: productAdditions,
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


module.exports = {
	c_readByCat,
}
