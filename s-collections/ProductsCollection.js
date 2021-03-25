// [REQUIRE] //
const mongoose = require('mongoose')


// [REQUIRE] Personal //
const products = require('../s-defaults/artofwings/products')


/******************* [CRUD] *******************/
// [READ] cat & subCat //
const c_readByCatAndSubCat = async (cat, subCat) => {
	let array = []

	for (let i = 0; i < products.length; i++) {
		if (products[i].cat == cat && products[i].subCat == subCat){
			array.push(products[i])
		}
	}

	return array
}


// [EXPORT] //
module.exports = {
	c_readByCatAndSubCat,
}
