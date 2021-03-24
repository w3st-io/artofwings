const flavors = require('../flavors')
// [EXPORT] //
module.exports = {
	// Wings //
	wings: {
		description: 'Crispy/Baked/Boneless Wings',

		options: {
			wings: [
				{
					id: '',
					title: '6 pieces',
					description: '',
					cost: 6.99,
					stripeCost: 699,
				},
				{
					id: '',
					title: '12 pieces',
					description: '',
					cost: 12.99,
					stripeCost: 1299,
				},
				{
					id: '',
					title: '24 pieces',
					description: '',
					cost: 24.99,
					stripeCost: 2499,
				},
			],
			tenders: [
				{
					id: '',
					title: '3 pieces',
					description: '',
					cost: 4.99,
					stripeCost: 499,
				},
				{
					id: '',
					title: '6 pieces',
					description: '',
					cost: 12.99,
					stripeCost: 1299,
				},
			]
		},

		flavors: flavors.flavors
	},

	// Sliders //
	sliders: {
		description: 'Comes with lettuce, onions, tomatos, and pickles',

		options: [
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
		],

		toppings: [
			{
				id: '',
				title: 'Sauteed onions',
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
				title: 'Add extra patty',
				description: '',
				cost: 1.00,
				stripeCost: 100,
			},
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

	// Appetizers //
	appetizers: {
		options: [
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
	},

	// Salads //
	salads: {
		options: [
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

	// Plantbased //
	plantbased: {
		options: [
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
		],
	},

	signatureSandwiches: {
		caption: 'Served w/fries',

		options: [
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
			{
				id: '',
				title: 'Grilled Cheese Sandwich',
				description: 'Add bacon, lettuce, and tomato for $2.00',
				cost: 4.99,
				stripeCost: 499,
			},
		]
	},

	// Specialty Sides //
	specialtySides: {
		caption: 'French Fries or Tator Tots',

		options: [
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
	},

	// Beverages //
	beverages: {
		options: [
			{
				id: '',
				title: 'Bottled Soda',
				description: '',
				cost: 2.69,
				stripeCost: 269,
			},
			{
				id: '',
				title: 'Bottled Water',
				description: '',
				cost: 1.69,
				stripeCost: 169,
			},
		]
	}
}