// [REQUIRE] //
const cors = require('cors')
const express = require('express')
const validator = require('validator')


// [REQUIRE] Personal //
const Auth = require('../../../s-middleware/Auth')
const productAdditionsCollection = require('../../../s-collections/productAdditionsCollection')
const productsCollection = require('../../../s-collections/productsCollection')
const productVariantsCollection = require('../../../s-collections/productVariantsCollection')


// [EXPRESS + USE] //
const router = express.Router().use(cors())


// [READ-ALL] //
router.get(
	'/:product_id',
	Auth.userToken(),
	async (req, res) => {
		try {
			if (validator.isAscii(req.params.product_id)) {
				// [READ] //
				const { product } = await productsCollection.c_read({
					product_id: req.params.product_id
				})	

				res.send({
					executed: true,
					status: true,
					location: '/pages/order/add',
					product: product,
				})
			}
			else {
				res.status(200).send({
					executed: true,
					status: false,
					location: '/pages/order/add',
					message: `/pages/order/add: Invalid Params`
				})
			}
		}
		catch (err) {
			res.status(200).send({
				executed: false,
				status: false,
				location: '/pages/order/add',
				message: `/pages/order/add: Error --> ${err}`
			})
		}
	},
)
	
	
// [EXPORT] //
module.exports = router