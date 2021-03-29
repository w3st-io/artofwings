// [REQUIRE] //
const mongoose = require('mongoose')


// [REQUIRE] Personal //
const config = require('../s-config')
const productAddition = require('./productAdditions')
const productVariants = require('./productVariants')
const productExtras = require('./productExtras')
const products = require('./products')
const productAdditionsModel = require('../s-models/ProductAdditionModel')
const productExtrasModel = require('../s-models/ProductExtraModel')
const productModel = require('../s-models/ProductModel')
const productVariantsModel = require('../s-models/ProductVariantModel')


async function insert() {
	try {
		// [MONGOOSE-CONNECTION] //
		mongoose.connect(
			config.MONGO_URI,
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useFindAndModify: false,
			},
			(err, connected) => {
				if (connected) { console.log('Mongoose Connected to DB') }
				else { console.log(`Mongoose Connection Error --> ${err}`) }
			}
		)

		// PRODUCTS //
		for (let i = 0; i < products.length; i++) {
			const p = products[i]
			
			// [SAVE] //
			await new productModel({
				_id: mongoose.Types.ObjectId(),
				cat: p.cat,
				subCat: p.subCat,
				title: p.title,
				description: p.description,
				image: p.image,
				cost: p.cost,
				productVariantTypes: p.productVariantTypes,
				productExtrasTypes: p.productExtrasTypes,
				productAdditionsTypes: p.productAdditionsTypes,
			}).save()
		}


		// PRODUCT VARIANT //
		for (let i = 0; i < productVariants.length; i++) {
			const p = productVariants[i]
			
			// [SAVE] //
			await new productVariantsModel({
				_id: mongoose.Types.ObjectId(),
				type: p.type,
				title: p.title,
				description: p.description,
				image: p.image,
				cost: p.cost,
			}).save()
		}


		// PRODUCT EXTRA //
		for (let i = 0; i < productExtras.length; i++) {
			const p = productExtras[i]
			
			// [SAVE] //
			await new productExtrasModel({
				_id: mongoose.Types.ObjectId(),
				type: p.type,
				title: p.title,
				description: p.description,
				image: p.image,
				cost: p.cost,
			}).save()
		}


		// PRODUCT ADDITIONS //
		for (let i = 0; i < productAddition.length; i++) {
			const p = productAddition[i]
			
			// [SAVE] //
			await new productAdditionsModel({
				_id: mongoose.Types.ObjectId(),
				type: p.type,
				title: p.title,
				description: p.description,
				image: p.image,
				cost: p.cost,
			}).save()
		}
	}
	catch (err) { console.log(err) }
}

insert()