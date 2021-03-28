// [REQUIRE] //
const mongoose = require('mongoose')


// [REQUIRE] Personal //
const products = require('../s-defaults/artofwings/products')


/******************* [CRUD] *******************/
// [READ] id //
const c_read = async ({ product_id }) => {
	let product = null
	
	products.forEach(p => { if (p._id == product_id) { product = p } })

	console.log(product)
	
	return product
}

// [READ] cat & subCat //
const c_readByCatAndSubCat = async (cat, subCat) => {
	let array = []

	products.forEach(product => {
		if (product.cat == cat && product.subCat == subCat) { array.push(product) }
	})

	return array
}


// [EXPORT] //
module.exports = {
	c_read,
	c_readByCatAndSubCat,
}
