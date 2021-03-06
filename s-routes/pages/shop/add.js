// [REQUIRE] //
const cors = require('cors')
const express = require('express')
const validator = require('validator')


// [REQUIRE] Personal //
const Auth = require('../../../s-middleware/Auth')
const productsCollection = require('../../../s-collections/productsCollection')


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
					location: '/pages/shop/add',
					product: product,
				})
			}
			else {
				res.send({
					executed: true,
					status: false,
					location: '/pages/shop/add',
					message: `/pages/shop/add: Invalid Params`
				})
			}
		}
		catch (err) {
			res.send({
				executed: false,
				status: false,
				location: '/pages/shop/add',
				message: `/pages/shop/add: Error --> ${err}`
			})
		}
	},
)
	
	
module.exports = router