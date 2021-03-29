// [REQUIRE] //
const cors = require('cors')
const express = require('express')
const validator = require('validator')


// [REQUIRE] Personal //
const Auth = require('../../../s-middleware/Auth')
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
				let options = []

				// [READ] //
				const { product } = await productsCollection.c_read({
					product_id: req.params.product_id
				})

				// Get Variants //
				for (let i = 0; i < product.productVariantTypes.length; i++) {
					const pvt = product.productVariantTypes[i]
					
					// [READ-ALL] productVariants //
					const { productVariants } = await productVariantsCollection.c_readAllByType({
						type: pvt
					})
					
					options.push(productVariants)
				}

				res.send({
					executed: true,
					status: true,
					location: '/pages/order/add',
					product: product,
					options: options
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