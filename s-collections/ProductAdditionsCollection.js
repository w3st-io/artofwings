// [REQUIRE] //
const mongoose = require('mongoose')


// [REQUIRE] Personal //
const productsAdditions = require('../s-defaults/artofwings/productAdditions')


/******************* [CRUD] *******************/
// [READ] id //
const c_read = async ({ product_id }) => {
	let object = null
	
	productsAdditions.forEach(p => { if (p._id == product_id) { object = p } })
	
	return object
}

// [READ] type //
const c_readByType = async (type) => {
	let array = []

	productsAdditions.forEach(productAddition => {
		if (productAddition.type == type) { array.push(productAddition) }
	})

	return array
}


// [EXPORT] //
module.exports = {
	c_read,
	c_readByType,
}
