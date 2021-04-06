// [REQUIRE] //
const mongoose = require('mongoose')


// [REQUIRE] Personal //
const productAddition = require('./productAdditions')
const productExtras = require('./productExtras')
const productOptions = require('./productOptions')
const productVariants = require('./productVariants')
const products = require('./products')
const ProductAdditionModel = require('../s-models/ProductAdditionModel')
const ProductExtraModel = require('../s-models/ProductExtraModel')
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
		await ProductAdditionModel.deleteMany()
		await ProductExtraModel.deleteMany()
		await ProductModel.deleteMany()
		await ProductOptionsModel.deleteMany()
		await ProductVariantModel.deleteMany()


		// PRODUCT OPTIONS //
		for (let i = 0; i < productOptions.length; i++) {
			const p = productOptions[i]
			
			// [SAVE] //
			await new ProductOptionsModel({
				_id: mongoose.Types.ObjectId(),
				cat: p.cat,
				type: p.type,
				name: p.name,
				description: p.description,
				image: p.image,
				cost: p.cost,
			}).save()
		}


		// PRODUCT VARIANT //
		for (let i = 0; i < productVariants.length; i++) {
			// [INIT] //
			const p = productVariants[i]


			// [INIT] //
			let option_ids = []


			const options = await ProductOptionsModel.find({
				type: p.options
			})


			options.forEach(o => { option_ids.push(o._id) })
			
			// [SAVE] //
			await new ProductVariantModel({
				_id: mongoose.Types.ObjectId(),
				type: p.type,
				name: p.name,
				description: p.description,
				image: p.image,
				options: option_ids,
			}).save()
		}


		// PRODUCT EXTRA //
		for (let i = 0; i < productExtras.length; i++) {
			// [INIT] Const //
			const p = productExtras[i]


			// [INIT] //
			let option_ids = []


			// Product Options //
			const options = await ProductOptionsModel.find({
				type: p.options
			})

			options.forEach(o => { option_ids.push(o._id) })
			

			// [SAVE] //
			await new ProductExtraModel({
				_id: mongoose.Types.ObjectId(),
				type: p.type,
				name: p.name,
				description: p.description,
				image: p.image,
				options: option_ids,
			}).save()
		}


		// PRODUCT ADDITIONS //
		for (let i = 0; i < productAddition.length; i++) {
			// [INIT] Const //
			const p = productAddition[i]


			// [INIT] //
			let productVariant_ids = []
			let productExtra_ids = []
			let productAddition_ids = []


			// Product Variants //
			if (p.productVariants.length > 0) {
				for (let i = 0; i < p.productVariants.length; i++) {
					const pv = p.productVariants[i];

					const productVariant = await ProductVariantModel.findOne({
						type: pv
					})

					productVariant_ids.push(productVariant._id)
				}
			}


			// Product extras //
			if (p.productExtras.length > 0) {
				for (let i = 0; i < p.productExtras.length; i++) {
					const pe = p.productExtras[i];

					const productExtra = await ProductExtraModel.findOne({
						type: pe
					})

					productExtra_ids.push(productExtra._id)
				}
			}


			// Product additions //
			if (p.productAdditions.length > 0) {
				for (let i = 0; i < p.productAdditions.length; i++) {
					const pa = p.productAdditions[i];

					const productExtra = await ProductAdditionModel.findOne({
						type: pa
					})

					productAddition_ids.push(productExtra._id)
				}
			}
			

			// [SAVE] //
			await new ProductAdditionModel({
				_id: mongoose.Types.ObjectId(),
				type: p.type,
				name: p.name,
				description: p.description,
				image: p.image,
				cost: p.cost,
				productVariants: productVariant_ids,
				productExtras: productExtra_ids,
				productAdditions: productAddition_ids,
			}).save()
		}


		// PRODUCTS //
		for (let i = 0; i < products.length; i++) {
			// [INIT] Const //
			const p = products[i]


			// [INIT] //
			let productVariant_ids = []
			let productExtra_ids = []
			let productAddition_ids = []


			// Product Variants //
			if (p.productVariants.length > 0) {
				for (let i = 0; i < p.productVariants.length; i++) {
					const pv = p.productVariants[i];

					const productVariant = await ProductVariantModel.findOne({
						type: pv
					})

					productVariant_ids.push(productVariant._id)
				}
			}


			// Product extras //
			if (p.productExtras.length > 0) {
				for (let i = 0; i < p.productExtras.length; i++) {
					const pv = p.productExtras[i];

					const productExtra = await ProductExtraModel.findOne({
						type: pv
					})

					productExtra_ids.push(productExtra._id)
				}
			}


			// Product additions //
			if (p.productAdditions.length > 0) {
				for (let i = 0; i < p.productAdditions.length; i++) {
					const pa = p.productAdditions[i];

					const productExtra = await ProductAdditionModel.findOne({
						type: pa
					})

					productAddition_ids.push(productExtra._id)
				}
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
				productVariants: productVariant_ids,
				productExtras: productExtra_ids,
				productAdditions: productAddition_ids,
			}).save()
		}
	}
	catch (err) { console.log(err) }
}

insert()