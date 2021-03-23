const flavors = require('../flavors')
// [EXPORT] //
module.exports = {
	// WINGS //
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

	// SLIDERS //
	sliders: {
		description: 'Comes with lettuce, onions, tomatos, and pickles',

		variants: [
			{
				id: '',
				title: 'Single Slider',
				cost: 2.99,
				stripe: 299,
			},
			{
				id: '',
				title: 'Double Slider',
				cost: 4.99,
				stripe: 499,
			},
			{
				id: '',
				title: 'Triple Slider',
				cost: 6.99,
				stripe: 699,
			},
		],

		toppings: [
			{
				id: '',
				title: 'Sauteed onions',
				cost: 0.50,
				stripe: 50,
			},
			{
				id: '',
				title: 'jalapenos',
				cost: 0.50,
				stripe: 50,
			},
			{
				id: '',
				title: 'mushrooms',
				cost: 0.50,
				stripe: 50,
			},
			{
				id: '',
				title: 'Beef Bacon',
				cost: 1.75,
				stripe: 175,
			},
			{
				id: '',
				title: 'Bacon Jam',
				cost: 1.75,
				stripe: 175,
			},
			{
				id: '',
				title: 'Avacado',
				cost: 1.75,
				stripe: 175,
			},
			{
				id: '',
				title: 'Crispy Fried Onions',
				cost: 0.75,
				stripe: 75,
			},
		],

		additions: [
			{
				id: '',
				title: 'Add extra patty',
				cost: 1.00,
				stripe: 100,
			},
			{
				id: '',
				title: 'Add Art Appetizer (Except Quesadilla)',
				cost: 2.99,
				stripe: 299,
			},
			{
				id: '',
				title: 'Add Traditional or Boneless 4pc (With any choice of sause)',
				cost: 4.99,
				stripe: 499,
			},
		],

		sauses: [
			'Spicy Mayo',
			'Chipotle Mayo',
			'Teriyaki Aoli',
			'Thousand Island',
			'BBQ',
		],
	},
}