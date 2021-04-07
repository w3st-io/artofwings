// [REQUIRE] //
const mongoose = require('mongoose')
const validator = require('validator')


// [REQUIRE] Personal //
const productModel = require('../s-models/ProductModel')


/******************* [CRUD] *******************/
// [READ] //
const c_read = async ({ product_id }) => {
	try {
		// [VALIDATE] product_id //
		if (!mongoose.isValidObjectId(product_id)) {
			return {
				executed: true,
				status: false,
				message: 'productsCollection: Invalid product_id',
			}
		}

		const product = await productModel.findById(product_id)
			.populate({
				path: 'productVariants',
				populate: { path: 'options' }
			})
			.populate('productExtras')
			.populate('productAdditions')
			.exec()
		
		return {
			executed: true,
			status: true,
			product: product
		}
	}
	catch (err) {
		console.log(err);
		return {
			executed: false,
			status: false,
			message: `productsCollection: Error --> ${err}`
		}
	}
}

// [READ-ALL] Within Cat Sorted //
const c_readByCatAndSubCat = async ({ cat, subCat }) => {
	try {
		// [VALIDATE] cat //
		if (!validator.isAscii(cat)) {
			return {
				executed: true,
				status: false,
				message: 'productsCollection: Invalid cat',
			}
		}

		// [VALIDATE] subCat //
		if (!validator.isAscii(subCat)) {
			return {
				executed: true,
				status: false,
				message: 'productsCollection: Invalid subCat',
			}
		}

		const products = await productModel.find({ cat: cat, subCat: subCat })
			.populate({
				path: 'productVariants',
				populate: { path: 'options' }
			})
			.populate('productExtras')
			.populate('productAdditions')
			.exec()

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
			message: `productsCollection: Error --> ${err}`,
		}
	}
}


// [EXPORT] //
module.exports = {
	c_read,
	c_readByCatAndSubCat,
}
