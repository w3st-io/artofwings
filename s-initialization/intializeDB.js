// [REQUIRE] //
const mongoose = require('mongoose')

// [REQUIRE] Personal //
const products = require('./products')
const productVariants = require('./productVariants')
const productExtras = require('./productExtras')
const productAddition = require('./productAdditions')

const productModel = require('../s-models/ProductModel')
const productVariantsModel = require('../s-models/ProductVariantModel')
const productExtrasModel = require('../s-models/ProductExtraModel')
const productAdditionsModel = require('../s-models/ProductAdditionModel')

async function insert() {
	try {
		for (let i = 0; i < products.length; i++) {
			const p = products[i];
			
			// [SAVE] //
			const product = await new productModel({
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
	
			console.log(product)
		}
	}
	catch (err) { console.log(err) }
}

insert()