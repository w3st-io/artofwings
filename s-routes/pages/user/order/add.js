// [REQUIRE] //
const cors = require('cors')
const express = require('express')
const validator = require('validator')


// [REQUIRE] Personal //
const Auth = require('../../../../s-middleware/Auth')
const ProductsCollection = require('../../../../s-collections/ProductsCollection')


// [EXPRESS + USE] //
const router = express.Router().use(cors())


// [READ-ALL] //
router.get(
	'/:product_id',
	Auth.userToken(),
	async (req, res) => {
		try {
			if (validator.isAscii(req.params.product_id)) {
				const product = await ProductsCollection.c_read({
					product_id: req.params.product_id
				})
				
				res.send({
					executed: true,
					status: true,
					location: '/pages/user/order/add',
					product: product,
				})
			}
			else {
				res.status(200).send({
					executed: true,
					status: false,
					location: '/pages/user/order/add',
					message: `/pages/user/order/add: Invalid Params`
				})
			}
		}
		catch (err) {
			res.status(200).send({
				executed: false,
				status: false,
				location: '/pages/user/order/add',
				message: `/pages/user/order/add: Error --> ${err}`
			})
		}
	},
)
	
	
// [EXPORT] //
module.exports = router