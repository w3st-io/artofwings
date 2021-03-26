// [REQUIRE] //
const cors = require('cors')
const express = require('express')


// [REQUIRE] Personal //
const ProductsCollection = require('../../s-collections/ProductsCollection')
const flavors = require('../../s-defaults/artofwings/flavors')
const Auth = require('../../s-middleware/Auth')


// [EXPRESS + USE] //
const router = express.Router().use(cors())


router.get(
	'/',
	Auth.userTokenNotRequired(),
	async (req, res) => {
		try {
			menu = {
				// Wings //
				wingsAndTenders: {
					title: 'Wings & Tenders',
			
					description: 'Crispy/Baked/Boneless Wings',
			
					options: [
						{
							title: 'Wings',
							variants: await ProductsCollection.c_readByCatAndSubCat(
								'wingsAndTenders',
								'wings'
							),
						},
						{
							title: 'Tenders',
							variants: await ProductsCollection.c_readByCatAndSubCat(
								'wingsAndTenders',
								'wings'
							),
						}
					],
			
					flavors: flavors.flavors
				},
			
				// Sliders //
				sliders: {
					title: 'Sliders',
			
					description: 'Comes with lettuce, onions, tomatos, and pickles',
			
					options: [
						{
							title: 'Classic',
							variants: await ProductsCollection.c_readByCatAndSubCat(
								'sliders',
								'sliders'
							),
						},
						{
							title: 'Toppings',
							variants: await ProductsCollection.c_readByCatAndSubCat(
								'sliders',
								'toppings'
							),
						},
						{
							title: 'Additions',
							variants: await ProductsCollection.c_readByCatAndSubCat(
								'sliders',
								'additions'
							),
						},
					],
			
					sauces: [
						'Spicy Mayo',
						'Chipotle Mayo',
						'Teriyaki Aoli',
						'Thousand Island',
						'BBQ',
					],
				},
			
				// Signature Dishes //
				signatureDishes: {
					title: 'Signature Dishes',
			
					description: 'Served w/fries',
			
					options: [
						{
							title: 'Burgers',
							variants: await ProductsCollection.c_readByCatAndSubCat(
								'signatureDishes',
								'burgers'
							),
						},
						{
							title: 'Sandwiches',
							variants: await ProductsCollection.c_readByCatAndSubCat(
								'signatureDishes',
								'sandwiches'
							),
						},
						{
							title: 'Subs',
							variants: await ProductsCollection.c_readByCatAndSubCat(
								'signatureDishes',
								'subs'
							),
						}
					]
				},
			
				// Specialty Sides //
				specialtySides: {
					title: 'Specialty Sides',
			
					description: '',
					
					options: [
						{
							title: 'French Fries or Tator Tots',
							variants: await ProductsCollection.c_readByCatAndSubCat(
								'specialtySides',
								'FrienchFriesOrTatorTots'
							),
						},
					]
				},
			
				// Appetizers //
				appetizers: {
					title: 'Appetizers',
			
					description: '',
			
					options: [
						{
							title: 'Classic',
							variants: await ProductsCollection.c_readByCatAndSubCat(
								'appetizers',
								'classic'
							),
						},
					]
				},
			
				// Salads //
				salads: {
					title: 'Salads',
			
					description: '',
			
					options: [
						{
							title: 'Classic',
							variants: await ProductsCollection.c_readByCatAndSubCat(
								'salads',
								'classic'
							),
						},
					]
				},
			
				// Plantbased //
				plantbased: {
					title: 'Plantbased',
			
					description: '',
			
					options: [
						{
							title: 'Beyond',
							variants: await ProductsCollection.c_readByCatAndSubCat(
								'plantbased',
								'beyond'
							),
						},
						{
							title: 'Veggie',
							variants: await ProductsCollection.c_readByCatAndSubCat(
								'plantbased',
								'veggie'
							),
						}
					],
				},
			
				// Beverages //
				beverages: {
					title: 'Beverages',
			
					description: '',
			
					options: [
						{
							title: 'Sodas',
							variants: await ProductsCollection.c_readByCatAndSubCat(
								'beverages',
								'soda'
							),
						},
						{
							title: 'Not Sodas',
							variants: await ProductsCollection.c_readByCatAndSubCat(
								'beverages',
								'notSodas'
							),
						}
					]
				}
			}

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