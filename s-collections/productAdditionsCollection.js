// [REQUIRE] //
const mongoose = require('mongoose')
const validator = require('validator')


// [REQUIRE] Personal //
const ProductAdditionModel = require('../s-models/ProductAdditionModel')


/******************* [CRUD] *******************/
// [READ] type //
const c_readAllByType = async ({ type }) => {
	try {
		// [VALIDATE] cat //
		if (!validator.isAscii(type)) {
			return {
				executed: true,
				status: false,
				message: 'productAdditionsCollection: Invalid type',
			}
		}

		const productAdditions = await ProductAdditionModel.find({ type: type })
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


// [READ] type //
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

		console.log(productAdditions)
		
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


// [EXPORT] //
module.exports = {
	c_readAllByType,
	c_readByCat,
}
