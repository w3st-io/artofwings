// [REQUIRE] //
const cors = require('cors')
const express = require('express')
const Stripe = require('stripe')
const validator = require('validator')


// [REQUIRE] Personal //
const config = require('../../s-config/index')


// [USE] //
const router = express.Router().use(cors())


// [STRIPE] //
const stripe = Stripe(
	config.STRIPE_SECRET_KEY ||
	'sk_test_51INvnfCC0rHo3XXZxdgGXsFDstmtEnCGYux6ZA8XlySkrSsYqHAa5kOFptGb8k2w6TtyOAuJhiBpeeTkXShldA6E00XuTKIQ3h'
)


router.get(
	'/balance',
	async (req, res) => {
		try {
			const balance = await stripe.balance.retrieve()

			res.send({
				executed: true,
				status: true,
				location: '/api/payments/balance',
				message: 'Successfully retrieved balance',
				balance: balance,
			})
		}
		catch (err) {
			res.send({
				executed: false,
				status: false,
				location: '/api/payments/balance',
				message: `Error --> ${err}`,
			})
		}
	}
)


router.get(
	'/transactions',
	async (req, res) => {
		try {
			const balanceTransactions = await stripe.balanceTransactions.list({
				limit: 3,
			})

			res.send({
				executed: true,
				status: true,
				location: '/api/payments/transactions',
				message: 'Successfully retrieved balance',
				balanceTransactions: balanceTransactions,
			})
		}
		catch (err) {
			res.send({
				executed: false,
				status: false,
				location: '/api/payments/transactions',
				message: `Error --> ${err}`,
			})
		}
	}
)


router.get(
	'/create-payment-method',
	async (req, res) => {
		try {
			const token = await stripe.tokens.create({
				card: {
					number: '4242424242424242',
					exp_month: 3,
					exp_year: 2022,
					cvc: '314',
				},
			})

			const source = await stripe.sources.create({
				type: 'card',
				token: token.id
			})
			
			const charge = await stripe.charges.create({
				amount: 2000,
				currency: 'usd',
				customer: 'cus_J9YT4DzdMZCu7v',
				source: source.id
			})

			const sourceRetrieve = await stripe.sources.retrieve(
				'src_1IXHFgCC0rHo3XXZO6aKTeck'
			)

			res.send({ token, source, sourceRetrieve, charge })
		}
		catch (err) {
			res.send({
				executed: false,
				status: false,
				location: '/api/payments/charge',
				message: `Error --> ${err}`
			})
		}
	}
)


router.post(
	'/charge',
	async (req, res) => {
		try {
			// [VALIDATION] //
			if (validator.isAscii(req.body.product_id)) {
				if (validator.isEmail(req.body.email)) {
					// [GET-PRODUCT] //
					const pObj = await productsCollection.c_getProduct(
						req.body.product_id
					)

					if (pObj.product) {
						// [STRIPE] Charge //
						const charge = await stripe.charges.create({
							amount: pObj.product.downPayment * 100,
							currency: 'usd',
							receipt_email: req.body.email,
							description: `
								purchase of ${pObj.product.type} ${pObj.product.name}
							`,
							source: req.body.token.id
						})
			
						// Payment success/fail //
						if (pObj.paid == true) {
							res.send({
								executed: true,
								status: true,
								location: '/api/payments/transactions',
								message: 'Success!',
								paid: true,
							})
						}
						else {
							res.send({
								executed: true,
								status: true,
								location: '/api/payments/transactions',
								message: 'Something went wrong',
								paid: false,
							})
						}
					}
					else {
						res.send({
							executed: true,
							status: false,
							location: '/api/payments/charge',
							message: 'No product found'
						})
					}
				}
				else {
					res.send({
						executed: true,
						status: false,
						location: '/api/payments/charge',
						message: 'Invalid Email'
					})
				}
			}
			else {
				res.send({
					executed: true,
					status: false,
					location: '/api/payments/charge',
					message: `Invalid product_id`
				})
			}
		}
		catch (err) {
			res.send({
				executed: false,
				status: false,
				location: '/api/payments/charge',
				message: `Error --> ${err}`
			})
		}
	}
)


module.exports = router