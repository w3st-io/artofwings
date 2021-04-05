// [REQUIRE] //
const mongoose = require('mongoose')


// [REQUIRE] Personal //
const productAddition = require('./productAdditions')
const productVariants = require('./productVariants')
const productExtras = require('./productExtras')
const products = require('./products')
const ProductAdditionsModel = require('../s-models/ProductAdditionModel')
const ProductExtrasModel = require('../s-models/ProductExtraModel')
const ProductModel = require('../s-models/ProductModel')
const ProductOptionsModel = require('../s-models/ProductOptionModel')
const ProductVariantModel = require('../s-models/ProductVariantModel')


async function insert() {
	try {
		let pv = null
		let pv2 = null

		// [MONGOOSE-CONNECTION] //
		mongoose.connect(
			'mongodb://localhost:27017/artofwings',
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

		// Empty out database //
		await ProductAdditionsModel.deleteMany()
		await ProductExtrasModel.deleteMany()
		await ProductModel.deleteMany()
		await ProductOptionsModel.deleteMany()
		await ProductVariantModel.deleteMany()


		// PRODUCT VARIANT //
		for (let i = 0; i < productVariants.length; i++) {
			const p = productVariants[i]
			
			// [SAVE] //
			await new ProductVariantModel({
				_id: mongoose.Types.ObjectId(),
				type: p.type,
				name: p.name,
				description: p.description,
				image: p.image,
				options: p.options,
			}).save()
		}


		// PRODUCT EXTRA //
		for (let i = 0; i < productExtras.length; i++) {
			const p = productExtras[i]
			
			// [SAVE] //
			await new ProductExtrasModel({
				_id: mongoose.Types.ObjectId(),
				type: p.type,
				name: p.name,
				description: p.description,
				image: p.image,
				options: p.options,
			}).save()
		}


		// PRODUCT ADDITIONS //
		for (let i = 0; i < productAddition.length; i++) {
			let p = productAddition[i]
			
			if (i == 0) {
				pv = await ProductVariantModel.findOne({
					type: 'appetizers'
				})

				p.productVariants = [pv._id]
			}

			if (i == 1) {
				pv = await ProductVariantModel.findOne({
					type: 'wing-type'
				})

				pv2 = await ProductVariantModel.findOne({
					type: 'flavors'
				})

				p.productVariants = [pv._id, pv2._id]
			}

			// [SAVE] //
			await new ProductAdditionsModel({
				_id: mongoose.Types.ObjectId(),
				type: p.type,
				name: p.name,
				description: p.description,
				image: p.image,
				productVariants: p.productVariants,
				cost: p.cost,
			}).save()
		}


		// PRODUCTS //
		for (let i = 0; i < products.length; i++) {
			const p = products[i]

			if (i == 0 || i == 1 || i == 2) {
				pv = await ProductVariantModel.findOne({
					type: 'flavors'
				})

				pv2 = await ProductVariantModel.findOne({
					type: 'wing-type'
				})

				p.productVariants = [pv._id, pv2._id]
			}

			if (i == 5 || i == 6 || i == 7) {
				pv = await ProductVariantModel.findOne({
					type: 'sauces'
				})

				pv2 = await ProductAdditionsModel.find({
					type: 'slider'
				})

				p.productVariants = [pv._id]
				p.productAdditions = [pv2[0]._id, pv2[1]._id]
			}
			
			// [SAVE] //
			await new ProductModel({
				_id: mongoose.Types.ObjectId(),
				cat: p.cat,
				subCat: p.subCat,
				name: p.name,
				description: p.description,
				image: p.image,
				cost: p.cost,
				productVariants: p.productVariants,
				productExtras: p.productExtras,
				productAdditions: p.productAdditions,
			}).save()
		}
	}
	catch (err) { console.log(err) }
}

insert()