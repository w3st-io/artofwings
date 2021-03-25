// [EXPORT] //

const products = [
	// wingsAndTenders wings //
	{
		id: 'wingsAndTenders-wings-6',
		cat: 'wingsAndTenders',
		subCat: 'wings',
		title: '6 pieces',
		description: '',
		cost: 6.99,
		stripeCost: 699,
	},
	{
		id: 'wingsAndTenders-wings-12',
		cat: 'wingsAndTenders',
		subCat: 'wings',
		title: '12 pieces',
		description: '',
		cost: 12.99,
		stripeCost: 1299,
	},
	{
		id: 'wingsAndTenders-wings-24',
		cat: 'wingsAndTenders',
		subCat: 'wings',
		title: '24 pieces',
		description: '',
		cost: 24.99,
		stripeCost: 2499,
	},

	// wingsAndTenders tenders //
	{
		id: 'wingsAndTenders-tenders-3',
		cat: 'wingsAndTenders',
		subCat: 'tenders',
		title: '3 pieces',
		description: '',
		cost: 4.99,
		stripeCost: 499,
	},
	{
		id: 'wingsAndTenders-tenders-6',
		cat: 'wingsAndTenders',
		subCat: 'tenders',
		title: '6 pieces',
		description: '',
		cost: 12.99,
		stripeCost: 1299,
	},

	// sliders sliders //
	{
		id: 'sliders-sliders-single-slider',
		cat: 'sliders',
		subCat: 'sliders',
		title: 'Single Slider',
		description: '',
		cost: 2.99,
		stripeCost: 299,
	},
	{
		id: 'sliders-sliders-double-slider',
		cat: 'sliders',
		subCat: 'sliders',
		title: 'Double Slider',
		description: '',
		cost: 4.99,
		stripeCost: 499,
	},
	{
		id: 'sliders-sliders-triple-slider',
		cat: 'sliders',
		subCat: 'sliders',
		title: 'Triple Slider',
		description: '',
		cost: 6.99,
		stripeCost: 699,
	},

	// sliders toppings //
	{
		id: 'sliders-toppings-extra-patty',
		cat: 'sliders',
		subCat: 'toppings',
		title: 'Extra Patty',
		description: '',
		cost: 1.00,
		stripeCost: 100,
	},
	{
		id: 'sliders-toppings-sauteed-onions',
		cat: 'sliders',
		subCat: 'toppings',
		title: 'Sauteed Onions',
		description: '',
		cost: 0.50,
		stripeCost: 50,
	},
	{
		id: 'sliders-toppings-jalapenos',
		cat: 'sliders',
		subCat: 'toppings',
		title: 'Jalapenos',
		description: '',
		cost: 0.50,
		stripeCost: 50,
	},
	{
		id: 'sliders-toppings-mushrooms',
		cat: 'sliders',
		subCat: 'toppings',
		title: 'Mushrooms',
		description: '',
		cost: 0.50,
		stripeCost: 50,
	},
	{
		id: 'sliders-toppings-beef-bacon',
		cat: 'sliders',
		subCat: 'toppings',
		title: 'Beef Bacon',
		description: '',
		cost: 1.75,
		stripeCost: 175,
	},
	{
		id: 'sliders-toppings-bacon-jam',
		cat: 'sliders',
		subCat: 'toppings',
		title: 'Bacon Jam',
		description: '',
		cost: 1.75,
		stripeCost: 175,
	},
	{
		id: 'sliders-toppings-avacado',
		cat: 'sliders',
		subCat: 'toppings',
		title: 'Avacado',
		description: '',
		cost: 1.75,
		stripeCost: 175,
	},
	{
		id: 'sliders-toppings-crispy-fried-onions',
		cat: 'sliders',
		subCat: 'toppings',
		title: 'Crispy Fried Onions',
		description: '',
		cost: 0.75,
		stripeCost: 75,
	},

	// sliders additions //
	{
		id: 'sliders-additions-add-any-art-appetizer',
		cat: 'sliders',
		subCat: 'additions',
		title: 'Add any Art Appetizer',
		description: 'Except Quesadilla',
		cost: 2.99,
		stripeCost: 299,
	},
	{
		id: 'sliders-additions-add-traditional-or-boneless-4pc',
		cat: 'sliders',
		subCat: 'additions',
		title: 'Add Traditional or Boneless 4pc.',
		description: 'With any choice of sauce',
		cost: 4.99,
		stripeCost: 499,
	},

	// signatureDishes burgers //
	{
		id: 'signatureDishes-burgers-jamaican-burger',
		cat: 'signatureDishes',
		subCat: 'burgers',
		title: 'Jamaican Burger',
		description: '6oz burger, bacon jam, swiss cheese, signature sauce',
		cost: 8.99,
		stripeCost: 899,
	},
	{
		id: 'signatureDishes-burgers-bbq-burgers',
		cat: 'signatureDishes',
		subCat: 'burgers',
		title: 'BBQ Burger',
		description: '6oz burger, BBQ sauce, cheddar, crispy onions, beef bacon, tomato',
		cost: 7.50,
		stripeCost: 750,
	},
	{
		id: 'signatureDishes-burgers-spicy-art-burgers',
		cat: 'signatureDishes',
		subCat: 'burgers',
		title: 'Spicy Art Burger',
		description: 'Jalapenos, spicy mayo, cheddar cheese, beef bacon',
		cost: 7.50,
		stripeCost: 750,
	},
	{
		id: 'signatureDishes-burgers-chop-cheese-burger',
		cat: 'signatureDishes',
		subCat: 'burgers',
		title: 'Chop Cheese Burger',
		description: '6oz burger with choices of lettuce, tomato, or onions served on an italian roll',
		cost: 6.99,
		stripeCost: 699,
	},

	// signatureDishes sandwiches //
	{
		id: 'signatureDishes-sandwiches-grilled-cheese-sandwich',
		cat: 'signatureDishes',
		subCat: 'sandwiches',
		title: 'Grilled Cheese Sandwich',
		description: 'Add bacon, lettuce, and tomato for $2.00',
		cost: 4.99,
		stripeCost: 499,
	},
	{
		id: 'signatureDishes-sandwiches-classic-chicken-sandwich',
		cat: 'signatureDishes',
		subCat: 'sandwiches',
		title: 'Classic Chicken Sandwich',
		description: 'Crispy or grilled chicken, spicy mayo, lettuce, tomato',
		cost: 7.50,
		stripeCost: 750,
	},
	{
		id: 'signatureDishes-sandwiches-buffalo-chicken-sandwich',
		cat: 'signatureDishes',
		subCat: 'sandwiches',
		title: 'Buffalo Chicken Sandwich',
		description: 'Crispy or grilled chicken buffalo sauce, blue cheese, crispy onions',
		cost: 7.50,
		stripeCost: 750,
	},
	{
		id: 'signatureDishes-sandwiches-art-bbq-chicken-sandwich',
		cat: 'signatureDishes',
		subCat: 'sandwiches',
		title: 'Art BBQ Chicken Sandwich',
		description: 'Crispy or grilled chicken BBQ sauce, coleslaw, pickles, bacon',
		cost: 7.50,
		stripeCost: 750,
	},

	// signatureDishes subs //
	{
		id: 'signatureDishes-subs-the-rutgers-cheesesteak',
		cat: 'signatureDishes',
		subCat: 'subs',
		title: 'The Rutgers Cheesesteak',
		description: 'Grilled beef, sauteed onions, american cheese, thousand island, served on a brioche roll',
		cost: 6.99,
		stripeCost: 699,
	},
	{
		id: 'signatureDishes-subs-cheesesteak',
		cat: 'signatureDishes',
		subCat: 'subs',
		title: 'Cheesesteak',
		description: 'Melted American cheese w/sweet peppers & onions',
		cost: 6.99,
		stripeCost: 699,
	},

	// specialtySides FrienchFriesOrTatorTots //
	{
		id: 'specialtySides-FrienchFriesOrTatorTots-plain',
		cat: 'specialtySides',
		subCat: 'FrienchFriesOrTatorTots',
		title: 'plain',
		description: 'Classic side',
		cost: 2.99,
		stripeCost: 299,
	},
	{
		id: 'specialtySides-FrienchFriesOrTatorTots-sweet-potato',
		cat: 'specialtySides',
		subCat: 'FrienchFriesOrTatorTots',
		title: 'Sweet Potato',
		description: 'Sweet potato',
		cost: 3.99,
		stripeCost: 399,
	},
	{
		id: 'specialtySides-FrienchFriesOrTatorTots-loaded',
		cat: 'specialtySides',
		subCat: 'FrienchFriesOrTatorTots',
		title: 'Loaded',
		description: 'Melted cheese, sour cream, and bacon',
		cost: 5.99,
		stripeCost: 599,
	},
	{
		id: 'specialtySides-FrienchFriesOrTatorTots-chicken',
		cat: 'specialtySides',
		subCat: 'FrienchFriesOrTatorTots',
		title: 'Chicken',
		description: 'Spicy mayo, fried or grilled chicken, crispy onions',
		cost: 5.75,
		stripeCost: 575,
	},
	{
		id: 'specialtySides-FrienchFriesOrTatorTots-burger',
		cat: 'specialtySides',
		subCat: 'FrienchFriesOrTatorTots',
		title: 'Burger',
		description: 'Melted American cheese, art burger sauce, red onions',
		cost: 5.25,
		stripeCost: 525,
	},
	{
		id: 'specialtySides-FrienchFriesOrTatorTots-fiery',
		cat: 'specialtySides',
		subCat: 'FrienchFriesOrTatorTots',
		title: 'Fiery',
		description: 'Melted cheese, jalapeno, and chili',
		cost: 5.99,
		stripeCost: 599,
	},
	{
		id: 'specialtySides-FrienchFriesOrTatorTots-cheese',
		cat: 'specialtySides',
		subCat: 'FrienchFriesOrTatorTots',
		title: 'Cheese',
		description: 'Melted cheese',
		cost: 4.99,
		stripeCost: 499,
	},
	{
		id: 'specialtySides-FrienchFriesOrTatorTots-mac-and-cheese',
		cat: 'specialtySides',
		subCat: 'FrienchFriesOrTatorTots',
		title: 'Mac and Cheese',
		description: 'Add bacon for $1.50 more',
		cost: 4.99,
		stripeCost: 499,
	},
	{
		id: 'specialtySides-FrienchFriesOrTatorTots-funnel-fries',
		cat: 'specialtySides',
		subCat: 'FrienchFriesOrTatorTots',
		title: 'Funnel Fries',
		description: 'Classic Funnel fries',
		cost: 4.95,
		stripeCost: 495,
	},

	// appetizers classic //
	{
		id: 'appetizer-classic-quesadilla',
		cat: 'appetizers',
		subCat: 'classic',
		title: 'Quesadilla',
		description: 'Add Chicken or Beef for $1.50',
		cost: 5.99,
		stripeCost: 599,
	},
	{
		id: 'appetizer-classic-friend-mac-and-cheese-bites',
		cat: 'appetizers',
		subCat: 'classic',
		title: 'Fried Mac and Cheese Bites',
		description: '',
		cost: 5.99,
		stripeCost: 599,
	},
	{
		id: 'appetizer-classic-fried-cauliflower-pops',
		cat: 'appetizers',
		subCat: 'classic',
		title: 'Fried Cauliflower Pops',
		description: '',
		cost: 4.99,
		stripeCost: 499,
	},
	{
		id: 'appetizer-classic-fried-pickles',
		cat: 'appetizers',
		subCat: 'classic',
		title: 'Fried Pickles',
		description: '',
		cost: 5.99,
		stripeCost: 599,
	},
	{
		id: 'appetizer-classic-mozzerella-sticks',
		cat: 'appetizers',
		subCat: 'classic',
		title: 'Mozzerella Sticks',
		description: '',
		cost: 4.99,
		stripeCost: 499,
	},
	{
		id: 'appetizer-classic-onion-rings',
		cat: 'appetizers',
		subCat: 'classic',
		title: 'Onion Rings',
		description: '',
		cost: 2.99,
		stripeCost: 299,
	},

	// salads classic //
	{
		id: 'salads-classic-house-salad',
		cat: 'salads',
		subCat: 'classic',
		title: 'House Salad',
		description: 'Lettuce, tomato, cucumbers, and red onions. Add chicken for $2.00',
		cost: 4.95,
		stripeCost: 495,
	},
	{
		id: 'salads-classic-portobello-salad',
		cat: 'salads',
		subCat: 'classic',
		title: 'Portobello Salad',
		description: 'Portobellos, argula, red onions, balsamic vinegar, and tomato. Add chicken for $2.00',
		cost: 5.95,
		stripeCost: 595,
	},

	// plantbased beyond //
	{
		id: 'plantbased-beyond-beyond-quesadilla',
		cat: 'plantbased',
		subCat: 'beyond',
		title: 'Beyond Quesadilla',
		description: '',
		cost: 9.99,
		stripeCost: 999,
	},
	{
		id: 'plantbased-beyond-beyond-burger',
		cat: 'plantbased',
		subCat: 'beyond',
		title: 'Beyond Burger',
		description: '',
		cost: 9.99,
		stripeCost: 999,
	},
	{
		id: 'plantbased-beyond-beyond-chop-cheese-burger',
		cat: 'plantbased',
		subCat: 'beyond',
		title: 'Beyond Chop Cheese Burger',
		description: '',
		cost: 9.99,
		stripeCost: 999,
	},
	
	// plantbased veggie //
	{
		id: 'plantbased-veggie-portobello-burger',
		cat: 'plantbased',
		subCat: 'veggies',
		title: 'Portobello Burger',
		description: '',
		cost: 6.99,
		stripeCost: 699,
	},
	{
		id: 'plantbased-veggie-veggie-burger',
		cat: 'plantbased',
		subCat: 'veggie',
		title: 'Veggie Burger',
		description: '',
		cost: 7.99,
		stripeCost: 799,
	},

	// Beverages sodas //
	{
		id: 'beverages-sodas-bottled-soda',
		cat: 'beverages',
		subCat: 'soda',
		title: 'Bottled Soda',
		description: '',
		cost: 2.69,
		stripeCost: 269,
	},

	// Beverages notSodas //
	{
		id: 'beverages-notSodas-bottled-water',
		cat: 'beverages',
		subCat: 'notSodas',
		title: 'Bottled Water',
		description: '',
		cost: 1.69,
		stripeCost: 169,
	},
]


module.exports = products