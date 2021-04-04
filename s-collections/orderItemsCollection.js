// [REQUIRE] //
const mongoose = require('mongoose')
const validator = require('validator')


// [REQUIRE] Personal //
const OrderItemModel = require('../s-models/OrderItemModel')


/******************* [CRUD] *******************/
// [CREATE] //
const c_create = async () => {
	
	try {
		// [SAVE] //
		const comment = await new OrderItemModel({
			_id: mongoose.Types.ObjectId(),
			product: '6066979b6f64a023accec2ac',
			productVariantChoices: ['6069560c30c3bdeabaf08fdc',],
			quantity: 1,
		}).save()
		
		const product = await OrderItemModel.findById(comment._id)
			.populate('productVariantChoices')
			.populate('productExtraChoices')
			.populate('productAdditionChoices')
			.exec()
	
		console.log('s', product)
	} catch (err) {
		
		console.log(err);
	}

}

// [READ] //
const c_read = async ({ orderItem_id }) => {
	try {
		// [VALIDATE] orderItem_id //
		if (!mongoose.isValidObjectId(orderItem_id)) {
			return {
				executed: true,
				status: false,
				message: 'notificationsCollection: Invalid orderItem_id',
			}
		}

		const product = await OrderItemModel.findById(orderItem_id)
			.populate('productVariantChoices')
			.deepPopulate('productVariantChoices.otherIds')
			.populate('productExtraChoices')
			.populate('productAdditionChoices')
			.exec()
		
		return {
			executed: true,
			status: true,
			product: product
		}
	}
	catch (err) {
		return {
			executed: false,
			status: false,
			message: `productsCollection: Error --> ${err}`
		}
	}
}


// [EXPORT] //
module.exports = {
	c_create,
	c_read,
}
