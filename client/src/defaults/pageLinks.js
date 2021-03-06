// [REQUIRE] //
const feather = require('feather-icons')


// [INIT] const //
const navIconConfig = {
	'stroke-width': 3,
	width: 18,
	height: 18,
	'class': ''
}
const sideMenuIconConfig = {
	'stroke-width': 2.4,
	width: 34,
	height: 34,
	'class': 'my-2'
}


module.exports = [
	{
		path: '/',
		text: '',
		navIcon: feather.icons.home.toSvg(navIconConfig),
		sideMenuIcon: feather.icons.home.toSvg(sideMenuIconConfig),
	},
	{
		path: '/menu',
		text: 'Menu',
	},
	{
		path: '/gallery',
		text: 'Gallery',
	},
	{
		path: '/directions',
		text: 'Directions',
	},
	{
		path: '/contact',
		text: 'Contact',
	},
	{
		path: '/about',
		text: 'About',
	},
]