// [REQUIRE] //
const mongoose = require('mongoose')


// [REQUIRE] Personal //
const toppings = require('../s-defaults/artofwings/toppings')


/******************* [CRUD] *******************/
// [READ] id //
const c_readAll = async () => { return toppings }


// [EXPORT] //
module.exports = {
	c_readAll,
}
