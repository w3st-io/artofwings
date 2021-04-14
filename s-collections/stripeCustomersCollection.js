// [REQUIRE] //
const mongoose = require('mongoose')
const validator = require('validator')


// [REQUIRE] Personal //
const StripeCustomerModel = require('../s-models/StripeCustomerModel')


/******************* [CRUD] *******************/
// [CREATE] //
const c_create = async ({ user_id, stripe_customer_id }) => {
	try {
		// [VALIDATE] user_id //
		if (!mongoose.isValidObjectId(user_id)) {
			return {
				executed: true,
				status: false,
				message: 'stripeCustomersCollection: Invalid user_id',
				updated: false,
			}
		}

		// [VALIDATE] stripe_customer_id //
		if (!validator.isAcsii(stripe_customer_id)) {
			return {
				executed: true,
				status: false,
				message: 'stripeCustomersCollection: Invalid stripe_customer_id',
				updated: false,
			}
		}

		// [SAVE] //
		const createdStripeCustomer = await new StripeCustomerModel({
			_id: mongoose.Types.ObjectId(),
			user: user_id,
			stripe_customer_id: stripe_customer_id,
		}).save()

		return {
			executed: true,
			status: true,
			createdStripeCustomer: createdStripeCustomer,
		}
	}
	catch (err) {
		return {
			executed: false,
			status: false,
			message: `stripeCustomersCollection: Error --> ${err}`,
		}
	}
}


module.exports = {
	c_create,
}
