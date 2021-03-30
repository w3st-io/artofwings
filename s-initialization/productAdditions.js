// [EXPORT] //
module.exports = [
	// sliders //
	{
		type: 'slider',
		title: 'Add Art Appetizer',
		description: 'Add any art appetizers (except for Quesadilla, Chicken Quesadilla, & Beef Quesadilla)',
		image: '',
		options: [
			{
				type: 'appetizer',
				title: 'Choose Appetizer',
				variants: [
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
		type: 'slider',
		title: 'Traditional or Boneless 4pc wings',
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
					'Plain',
					'Pineapple BBQ',
					'Honey BBQ',
					'Honey Garlic',
					'Asian Sesame',
					'General Tso',
					'Mojita Lime',
					'Buffalo Dry Rub',
					'Buffalo Mild',
					'Teriyaki Sauce',
					'Lousiana Sauce',
					'Korean BBQ',
					'Ragin\' Cajun',
					'Mango Habanero',
					'Knockout',
				]
			},
		],
		cost: 4.99,
	},
]