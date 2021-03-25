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
							variants: [
								{
									id: '',
									title: 'Single Slider',
									description: '',
									cost: 2.99,
									stripeCost: 299,
								},
								{
									id: '',
									title: 'Double Slider',
									description: '',
									cost: 4.99,
									stripeCost: 499,
								},
								{
									id: '',
									title: 'Triple Slider',
									description: '',
									cost: 6.99,
									stripeCost: 699,
								},
							]
						},
					],
			
					toppings: [
						{
							id: '',
							title: 'Extra Patty',
							description: '',
							cost: 1.00,
							stripeCost: 100,
						},
						{
							id: '',
							title: 'Sauteed Onions',
							description: '',
							cost: 0.50,
							stripeCost: 50,
						},
						{
							id: '',
							title: 'Jalapenos',
							description: '',
							cost: 0.50,
							stripeCost: 50,
						},
						{
							id: '',
							title: 'Mushrooms',
							description: '',
							cost: 0.50,
							stripeCost: 50,
						},
						{
							id: '',
							title: 'Beef Bacon',
							description: '',
							cost: 1.75,
							stripeCost: 175,
						},
						{
							id: '',
							title: 'Bacon Jam',
							description: '',
							cost: 1.75,
							stripeCost: 175,
						},
						{
							id: '',
							title: 'Avacado',
							description: '',
							cost: 1.75,
							stripeCost: 175,
						},
						{
							id: '',
							title: 'Crispy Fried Onions',
							description: '',
							cost: 0.75,
							stripeCost: 75,
						},
					],
			
					additions: [
						{
							id: '',
							title: 'Add any Art Appetizer',
							description: 'Except Quesadilla',
							cost: 2.99,
							stripeCost: 299,
						},
						{
							id: '',
							title: 'Add Traditional or Boneless 4pc.',
							description: 'With any choice of sauce',
							cost: 4.99,
							stripeCost: 499,
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
							variants: [
								{
									id: '',
									title: 'Jamaican Burger',
									description: '6oz burger, bacon jam, swiss cheese, signature sauce',
									cost: 8.99,
									stripeCost: 899,
								},
								{
									id: '',
									title: 'BBQ Burger',
									description: '6oz burger, BBQ sauce, cheddar, crispy onions, beef bacon, tomato',
									cost: 7.50,
									stripeCost: 750,
								},
								{
									id: '',
									title: 'Spicy Art Burger',
									description: 'Jalapenos, spicy mayo, cheddar cheese, beef bacon',
									cost: 7.50,
									stripeCost: 750,
								},
								{
									id: '',
									title: 'Chop Cheese Burger',
									description: '6oz burger with choices of lettuce, tomato, or onions served on an italian roll',
									cost: 6.99,
									stripeCost: 699,
								},
							],
						},
						{
							title: 'Sandwiches',
							variants: [
								{
									id: '',
									title: 'Grilled Cheese Sandwich',
									description: 'Add bacon, lettuce, and tomato for $2.00',
									cost: 4.99,
									stripeCost: 499,
								},
								{
									id: '',
									title: 'Classic Chicken Sandwich',
									description: 'Crispy or grilled chicken, spicy mayo, lettuce, tomato',
									cost: 7.50,
									stripeCost: 750,
								},
								{
									id: '',
									title: 'Baffalo Chicken Sandwich',
									description: 'Crispy or grilled chicken buffalo sauce, blue cheese, crispy onions',
									cost: 7.50,
									stripeCost: 750,
								},
								{
									id: '',
									title: 'Art BBQ Chicken Sandwich',
									description: 'Crispy or grilled chicken BBQ sauce, coleslaw, pickles, bacon',
									cost: 7.50,
									stripeCost: 750,
								},
							],
						},
						{
							title: 'Subs',
							variants: [
								{
									id: '',
									title: 'The Rutgers Cheesesteak',
									description: 'Grilled beef, sauteed onions, american cheese, thousand island, served on a brioche roll',
									cost: 6.99,
									stripeCost: 699,
								},
								{
									id: '',
									title: 'Cheesesteak',
									description: 'Melted American cheese w/sweet peppers & onions',
									cost: 6.99,
									stripeCost: 699,
								},
							],
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
							variants: [
								{
									id: '',
									title: 'plain',
									description: 'Classic side',
									cost: 2.99,
									stripeCost: 299,
								},
								{
									id: '',
									title: 'Sweet Potato',
									description: 'Sweet potato',
									cost: 3.99,
									stripeCost: 399,
								},
								{
									id: '',
									title: 'Loaded',
									description: 'Melted cheese, sour cream, and bacon',
									cost: 5.99,
									stripeCost: 599,
								},
								{
									id: '',
									title: 'Chicken',
									description: 'Spicy mayo, fried or grilled chicken, crispy onions',
									cost: 5.75,
									stripeCost: 575,
								},
								{
									id: '',
									title: 'Burger',
									description: 'Melted American cheese, art burger sauce, red onions',
									cost: 5.25,
									stripeCost: 525,
								},
								{
									id: '',
									title: 'Fiery',
									description: 'Melted cheese, jalapeno, and chili',
									cost: 5.99,
									stripeCost: 599,
								},
								{
									id: '',
									title: 'Cheese',
									description: 'Melted cheese',
									cost: 4.99,
									stripeCost: 499,
								},
								{
									id: '',
									title: 'Mac and Cheese',
									description: 'Add bacon for $1.50 more',
									cost: 4.99,
									stripeCost: 499,
								},
								{
									id: '',
									title: 'Funnel Fries',
									description: 'Classic Funnel fries',
									cost: 4.95,
									stripeCost: 495,
								},
							],
						}
					]
				},
			
				// Appetizers //
				appetizers: {
					title: 'Appetizers',
			
					description: '',
			
					options: [
						{
							title: 'Classic',
							variants: [
								{
									id: '',
									title: 'Quesadilla',
									description: 'Add Chicken or Beef for $1.50',
									cost: 5.99,
									stripeCost: 599,
								},
								{
									id: '',
									title: 'Fried Mac and Cheese Bites',
									description: '',
									cost: 5.99,
									stripeCost: 599,
								},
								{
									id: '',
									title: 'Fried Cauliflower Pops',
									description: '',
									cost: 4.99,
									stripeCost: 499,
								},
								{
									id: '',
									title: 'Fried Pickles',
									description: '',
									cost: 5.99,
									stripeCost: 599,
								},
								{
									id: '',
									title: 'Mozzerella Sticks',
									description: '',
									cost: 4.99,
									stripeCost: 499,
								},
								{
									id: '',
									title: 'Onion Rings',
									description: '',
									cost: 2.99,
									stripeCost: 299,
								},
							]
						}
					]
				},
			
				// Salads //
				salads: {
					title: 'Salads',
			
					description: '',
			
					options: [
						{
							title: 'Classic',
							variants: [
								{
									id: '',
									title: 'House Salad',
									description: 'Lettuce, tomato, cucumbers, and red onions. Add chicken for $2.00',
									cost: 4.95,
									stripeCost: 495,
								},
								{
									id: '',
									title: 'Portobello Salad',
									description: 'Portobellos, argula, red onions, balsamic vinegar, and tomato. Add chicken for $2.00',
									cost: 5.95,
									stripeCost: 595,
								},
							]
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
							variants: [
								{
									id: '',
									title: 'Beyond Quesadilla',
									description: '',
									cost: 9.99,
									stripeCost: 999,
								},
								{
									id: '',
									title: 'Beyond Burger',
									description: '',
									cost: 9.99,
									stripeCost: 999,
								},
								{
									id: '',
									title: 'Beyond Chop Cheese Burger',
									description: '',
									cost: 9.99,
									stripeCost: 999,
								},
							]
						},
						{
							title: 'Veggie',
							variants: [
								{
									id: '',
									title: 'Portobello Burger',
									description: '',
									cost: 6.99,
									stripeCost: 699,
								},
								{
									id: '',
									title: 'Veggie Burger',
									description: '',
									cost: 7.99,
									stripeCost: 799,
								},
							]
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
							variants: [
								{
									id: '',
									title: 'Bottled Soda',
									description: '',
									cost: 2.69,
									stripeCost: 269,
								},
							]
						},
						{
							title: 'Not Sodas',
							variants: [
								{
									id: '',
									title: 'Bottled Water',
									description: '',
									cost: 1.69,
									stripeCost: 169,
								},
							]
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