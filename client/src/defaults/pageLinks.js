// [REQUIRE] //
const feather = require('feather-icons')


// [EXPORT] //
module.exports = [
	{
		path: '/',
		type:'home',
		text: '',
		navIcon: feather.icons.home.toSvg({
			'stroke-width': 3,
			width: 18,
			height: 18,
			'class': ''
		}),
		sideMenuIcon: feather.icons.home.toSvg({
			'stroke-width': 2.4,
			width: 34,
			height: 34,
			'class': 'my-2'
		}),
	},
	{
		path: '/about',
		type: 'about',
		text: 'About Us',
	},
	{
		path: '/gallery',
		type: 'gallery',
		text: 'Gallery',
	},
	{
		path: '/directions',
		type: 'directions',
		text: 'Directions',
	},
	{
		path: '/contact-us',
		type: 'contact-us',
		text: 'Contact Us',
	},
]