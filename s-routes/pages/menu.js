// [REQUIRE] //
const cors = require('cors')
const express = require('express')


// [REQUIRE] Personal //
const ProductsCollection = require('../../s-collections/ProductsCollection')
const ProductsAdditionsCollection = require('../../s-collections/ProductAdditionsCollection')
const sauces = require('../../s-defaults/artofwings/sauces')
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
							variants: await ProductsCollection.c_readByCatAndSubCat(
								'wingsAndTenders',
								'wings'
							),
						},
						{
							title: 'Tenders',
							variants: await ProductsCollection.c_readByCatAndSubCat(
								'wingsAndTenders',
								'tenders'
							),
						},
					],
			
					flavors: await ProductsAdditionsCollection.c_readByType(
						'flavor'
					),
				},

				// Sliders //
				{
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
							title: 'Additions',
							variants: await ProductsCollection.c_readByCatAndSubCat(
								'sliders',
								'additions'
							),
						},
					],
			
					toppings: await ProductsAdditionsCollection.c_readByType(
						'topping'
					),
					
					sauces: sauces,
				},
				
				// Signature Dishes //
				{
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
							variants: await ProductsCollection.c_readByCatAndSubCat(
								'specialtySides',
								'FrienchFriesOrTatorTots'
							),
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
							variants: await ProductsCollection.c_readByCatAndSubCat(
								'appetizers',
								'classic'
							),
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
							variants: await ProductsCollection.c_readByCatAndSubCat(
								'salads',
								'classic'
							),
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
							variants: await ProductsCollection.c_readByCatAndSubCat(
								'combos',
								'slider-with-wings'
							),
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