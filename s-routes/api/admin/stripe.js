// [REQUIRE] //
const cors = require('cors')
const express = require('express')
const Stripe = require('stripe')


// [REQUIRE] Personal //
const config = require('../../../s-config')
const Auth = require('../../../s-middleware/Auth')


// [USE] //
const router = express.Router().use(cors())


// [STRIPE] //
const stripe = Stripe(config.STRIPE_SECRET_KEY)


router.get(
	'/balance',
	Auth.adminToken(),
	async (req, res) => {
		try {
			const balance = await stripe.balance.retrieve()

			res.send({
				executed: true,
				status: true,
				location: '/api/admin/stripe/balance',
				message: 'Successfully retrieved balance',
				balance: balance,
			})
		}
		catch (err) {
			res.send({
				executed: false,
				status: false,
				location: '/api/admin/stripe/balance',
				message: `Error --> ${err}`,
			})
		}
	}
)


router.get(
	'/transactions',
	Auth.adminToken(),
	async (req, res) => {
		try {
			const balanceTransactions = await stripe.balanceTransactions.list({
				limit: 3,
			})

			res.send({
				executed: true,
				status: true,
				location: '/api/admin/stripe/transactions',
				message: 'Successfully retrieved balance',
				balanceTransactions: balanceTransactions,
			})
		}
		catch (err) {
			res.send({
				executed: false,
				status: false,
				location: '/api/admin/stripe/transactions',
				message: `Error --> ${err}`,
			})
		}
	}
)

module.exports = router