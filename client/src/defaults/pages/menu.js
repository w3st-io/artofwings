const flavors = require('../flavors')
// [EXPORT] //
module.exports = {
	// Wings //
	wings: {
		description: 'Crispy/Baked/Boneless Wings',

		variants: {
			wings: [
				{
					id: '',
					title: '6 pieces',
					cost: 6.99,
					stripeCost: 699,
				},
				{
					id: '',
					title: '12 pieces',
					cost: 12.99,
					stripeCost: 1299,
				},
				{
					id: '',
					title: '24 pieces',
					cost: 24.99,
					stripeCost: 2499,
				},
			],
			tenders: [
				{
					id: '',
					title: '3 pieces',
					cost: 4.99,
					stripeCost: 499,
				},
				{
					id: '',
					title: '6 pieces',
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

		variants: [
			{
				id: '',
				title: 'Single Slider',
				cost: 2.99,
				stripeCost: 299,
			},
			{
				id: '',
				title: 'Double Slider',
				cost: 4.99,
				stripeCost: 499,
			},
			{
				id: '',
				title: 'Triple Slider',
				cost: 6.99,
				stripeCost: 699,
			},
		],

		toppings: [
			{
				id: '',
				title: 'Sauteed onions',
				cost: 0.50,
				stripeCost: 50,
			},
			{
				id: '',
				title: 'Jalapenos',
				cost: 0.50,
				stripeCost: 50,
			},
			{
				id: '',
				title: 'Mushrooms',
				cost: 0.50,
				stripeCost: 50,
			},
			{
				id: '',
				title: 'Beef Bacon',
				cost: 1.75,
				stripeCost: 175,
			},
			{
				id: '',
				title: 'Bacon Jam',
				cost: 1.75,
				stripeCost: 175,
			},
			{
				id: '',
				title: 'Avacado',
				cost: 1.75,
				stripeCost: 175,
			},
			{
				id: '',
				title: 'Crispy Fried Onions',
				cost: 0.75,
				stripeCost: 75,
			},
		],

		additions: [
			{
				id: '',
				title: 'Add extra patty',
				cost: 1.00,
				stripeCost: 100,
			},
			{
				id: '',
				title: 'Add Art Appetizer (Except Quesadilla)',
				cost: 2.99,
				stripeCost: 299,
			},
			{
				id: '',
				title: 'Add Traditional or Boneless 4pc (With any choice of sauce)',
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
		variant: [
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
				cost: 5.99,
				stripeCost: 599,
			},
		]
	},

	// Salads //
	salads: {
		variant: [
			{
				id: '',
				title: 'House Salad',
				description: 'Lettuce, tomato, cucumbers, red onions. Add chicken for $2.00',
				cost: 4.95,
				stripeCost: 495,
			},
			{
				id: '',
				title: 'Portobello Salad',
				description: 'Portobellos, argula, red onions, balsamic vinegar, tomato. Add chicken for $2.00',
				cost: 5.95,
				stripeCost: 595,
			},
		]
	},

	// Plantbased //
	plantbased: {
		variant: [
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

	sigSandwiches: {
		caption: 'Served w/fries',

		variant: [
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
				cost: 7.50,
				stripeCost: 750,	
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
}