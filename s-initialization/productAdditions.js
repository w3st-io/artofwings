// [EXPORT] //
module.exports = [
	// sliders //
	{
		type: 'sliders',
		title: 'Add Art Appetizer',
		description: 'Add any art appetizers (except for Quesadilla, Chicken Quesadilla, & Beef Quesadilla)',
		image: '',
		options: [
			{
				type: 'appetizer',
				title: 'Choose Appetizer',
				variants: [
					'Quesadilla',
					'Chicken Quesadilla',
					'Beef Quesadilla',
					'Fried Mac and Cheese Bites',
					'Fried Cauliflower Pops',
					'Fried Pickles',
					'Mozzerella Sticks',
					'Onion Rings'
				]
			},
		],
		cost: 2.99,
	},
	{
		type: 'sliders',
		title: 'Traditional or Boneless wings 4pc-wings',
		description: 'With any choice of sauce',
		image: '',
		options: [
			{
				type: 'bone',
				title: 'Choose Wing Type',
				variants: ['traditional', 'boneless',]
			},
			{
				type: 'flavor',
				title: 'Choose flavor',
				variants: [
					'Quesadilla',
					'Chicken Quesadilla',
					'Beef Quesadilla',
					'Fried Mac and Cheese Bites',
					'Fried Cauliflower Pops',
					'Fried Pickles',
					'Mozzerella Sticks',
					'Onion Rings'
				]
			},
		],
		cost: 2.99,
	},
]