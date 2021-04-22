// [REQUIRE] //
const cors = require('cors')
const express = require('express')
const Stripe = require('stripe')
const validator = require('validator')


// [REQUIRE] Personal //
const config = require('../../s-config')
const stripeCustomersCollection = require('../../s-collections/stripeCustomersCollection')
const Auth = require('../../s-middleware/Auth')


// [USE] //
const router = express.Router().use(cors())


// [STRIPE] //
const stripe = Stripe(config.STRIPE_SECRET_KEY)


router.get(
	'/create-customer',
	Auth.userToken(),
	async (req, res) => {
		try {
			/*
			req.body.address = {
				city: 'teaneck',
				country: 'USA',
				line1: '724 cedar ln.',
				postal_code: 07666,
				state: 'nj'
			}
			req.body.shipping = {
				address: {
					city: 'teaneck',
					country: 'USA',
					line1: '724 cedar ln.',
					postal_code: 07666,
					state: 'nj'
				},
				name: 'aleem ahmed',
			}
			*/
			// [STRIPE] Create Customer //
			const createdCustomer = await stripe.customers.create({
				name: req.body.name,
				email: req.body.email,
				phone: req.body.phone,
				address: req.body.address,
				shipping: req.body.shipping,
				metadata: {
					user_id: req.user_decoded.user_id,
				},
			})

			if (createdCustomer.created != null) {
				// [CREATE] stripeCustomer //
				stripeCustomersCollection.c_create({
					user_id: eq.user_decoded.user_id,
					stripe_customer_id: createdCustomer.id
				})

				res.send({
					executed: true,
					status: true,
					location: '/api/stripe/charge',
					createdCustomer: createdCustomer,
				})
			}
			else {
				res.send({
					executed: true,
					status: false,
					createdCustomer: createdCustomer,
					location: '/api/stripe/charge',
					message: 'Something went wrong',
				})
			}
		}
		catch (err) {
			res.send({
				executed: false,
				status: false,
				location: '/api/stripe/charge',
				message: `Error --> ${err}`
			})
		}
	}
)


router.get(
	'/create-payment-method',
	async (req, res) => {
		try {
			const customer = await stripe.customers.create({
				description: 'My First Test Customer (created for API docs)',
			})

			// store customer.id //
			
			const paymentMethod = await stripe.paymentMethods.create({
				type: 'card',
				card: {
				  number: '4242424242424242',
				  exp_month: 3,
				  exp_year: 2022,
				  cvc: '314',
				},
			})

			const attachedPaymentMethod = await stripe.paymentMethods.attach(
				paymentMethod.id,
				{ customer: customer.id }
			)

			const customerupdated = await stripe.customers.update(
				customer.id,
				{
					invoice_settings: {
						default_payment_method: paymentMethod.id,
					}
				}
			)

			const retrievedCustomer = await stripe.customers.retrieve(
				customer.id
			)

				
			/*
			const charge = await stripe.charges.create({
				amount: 2000,
				currency: 'usd',
				customer: 'cus_J9YT4DzdMZCu7v',
				source: source.id
			})
			*/
			
			res.send({
				customer,
				paymentMethod,
				attachedPaymentMethod,
				retrievedCustomer
			})
		}
		catch (err) {
			res.send({
				executed: false,
				status: false,
				location: '/api/stripe/charge',
				message: `Error --> ${err}`
			})
		}
	}
)


router.post(
	'/charge',
	async (req, res) => {
		try {
			// [VALIDATE] General //
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
								location: '/api/stripe/transactions',
								message: 'Success!',
								paid: true,
							})
						}
						else {
							res.send({
								executed: true,
								status: true,
								location: '/api/stripe/transactions',
								message: 'Something went wrong',
								paid: false,
							})
						}
					}
					else {
						res.send({
							executed: true,
							status: false,
							location: '/api/stripe/charge',
							message: 'No product found'
						})
					}
				}
				else {
					res.send({
						executed: true,
						status: false,
						location: '/api/stripe/charge',
						message: 'Invalid Email'
					})
				}
			}
			else {
				res.send({
					executed: true,
					status: false,
					location: '/api/stripe/charge',
					message: `Invalid product_id`
				})
			}
		}
		catch (err) {
			res.send({
				executed: false,
				status: false,
				location: '/api/stripe/charge',
				message: `Error --> ${err}`
			})
		}
	}
)

module.exports = router