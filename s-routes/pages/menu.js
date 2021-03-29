// [REQUIRE] //
const cors = require('cors')
const express = require('express')


// [REQUIRE] Personal //
const productsCollection = require('../../s-collections/productsCollection')
const productAdditionsCollection = require('../../s-collections/productAdditionsCollection')
const Auth = require('../../s-middleware/Auth')


// [EXPRESS + USE] //
const router = express.Router().use(cors())


router.get(
	'/',
	Auth.userTokenNotRequired(),
	async (req, res) => {
		try {
			menu = [
				// Wings //
				{
					title: 'Wings & Tenders',
			
					description: 'Crispy/Baked/Boneless Wings',
			
					options: [
						{
							title: 'Wings',
							variants: (await productsCollection.c_readByCatAndSubCat({
								cat: 'wingsAndTenders',
								subCat: 'wings',
							})).products,
						},
						{
							title: 'Tenders',
							variants: (await productsCollection.c_readByCatAndSubCat({
								cat: 'wingsAndTenders',
								subCat: 'tenders'
							})).products
						},
					],
			
					flavors: (await productAdditionsCollection.c_readAllByType({
						type: 'flavor',
					})).productAdditions
				},

				// Sliders //
				{
					title: 'Sliders',
			
					description: 'Comes with lettuce, onions, tomatos, and pickles',
			
					options: [
						{
							title: 'Classic',
							variants: (await productsCollection.c_readByCatAndSubCat({
								cat: 'sliders',
								subCat: 'sliders'
							})).products,
						},
						{
							title: 'Additions',
							variants: (await productsCollection.c_readByCatAndSubCat({
								cat: 'sliders',
								subCat: 'additions'
							})).products,
						},
					],
			
					toppings: (await productAdditionsCollection.c_readAllByType({
						type: 'topping'
					})).productAdditions,
					
					sauces: (await productAdditionsCollection.c_readAllByType({
						type: 'sauce'
					})).productAdditions,
				},
				
				// Signature Dishes //
				{
					title: 'Signature Dishes',
			
					description: 'Served w/fries',
			
					options: [
						{
							title: 'Burgers',
							variants: (await productsCollection.c_readByCatAndSubCat({
								cat: 'signatureDishes',
								subCat: 'burgers'
							})).products,
						},
						{
							title: 'Sandwiches',
							variants: (await productsCollection.c_readByCatAndSubCat({
								cat: 'signatureDishes',
								subCat: 'sandwiches'
							})).products,
						},
						{
							title: 'Subs',
							variants: (await productsCollection.c_readByCatAndSubCat({
								cat: 'signatureDishes',
								subCat: 'subs'
							})).products,
						},
					]
				},

				// Specialty Sides //
				{
					title: 'Specialty Sides',
			
					description: '',
					
					options: [
						{
							title: 'French Fries or Tator Tots',
							variants: (await productsCollection.c_readByCatAndSubCat({
								cat: 'specialtySides',
								subCat: 'FrienchFriesOrTatorTots'
							})).products,
						},
					]
				},

				// Appetizers //
				{
					title: 'Appetizers',
			
					description: '',
			
					options: [
						{
							title: 'Classic',
							variants: (await productsCollection.c_readByCatAndSubCat({
								cat: 'appetizers',
								subCat: 'classic'
							})).products,
						},
					]
				},

				// Salads //
				{
					title: 'Salads',
			
					description: '',
			
					options: [
						{
							title: 'Classic',
							variants: (await productsCollection.c_readByCatAndSubCat({
								cat: 'salads',
								catSub: 'classic'
							})).products,
						},
					]
				},

				// Plantbased //
				{
					title: 'Plantbased',
			
					description: '',
			
					options: [
						{
							title: 'Beyond',
							variants: (await productsCollection.c_readByCatAndSubCat({
								cat: 'plantbased',
								subCat: 'beyond'
							}
							)).products,
						},
						{
							title: 'Veggie',
							variants: (await productsCollection.c_readByCatAndSubCat({
								cat: 'plantbased',
								subCat: 'veggie'
							})).products,
						},
					],
				},

				// Beverages //
				{
					title: 'Beverages',
			
					description: '',
			
					options: [
						{
							title: 'Sodas',
							variants: (await productsCollection.c_readByCatAndSubCat({
								cat: 'beverages',
								subCat: 'soda'
							})).products,
						},
						{
							title: 'Not Sodas',
							variants: (await productsCollection.c_readByCatAndSubCat({
								cat: 'beverages',
								subCat: 'notSodas'
							})).products,
						},
					]
				},

				// combos //
				{
					title: 'Combos',
			
					description: '',
			
					options: [
						{
							title: 'Slider with Wings',
							variants: (await productsCollection.c_readByCatAndSubCat(
								'combos',
								'slider-with-wings'
							)).products,
						},
					]
				},
			]

			res.status(200).send({
				executed: true,
				status: true,
				location: '/pages/menu',
				menu: menu,
			})
		}
		catch (err) {
			res.status(200).send({
				executed: false,
				status: false,
				location: '/pages/menu',
				message: `/pages/menu: Error --> ${err}`
			})
		}
	}
)


// [EXPORT] //
module.exports = router