// [REQUIRE] //
require('dotenv').config()


module.exports = {
	// [APP] //
	NODE_ENV: process.env.NODE_ENV || 'development',

	// [PORT] //
	PORT: process.env.PORT || 5000,

	// [MONGODB] //
	MONGO_URI: process.env.MONGO_URI || '',

	// [URL] //
	CLIENT_BASE_URL: process.env.BASE_URL || 'http://localhost:8080',
	SERVER_BASE_URL: process.env.BASE_URL || 'http://localhost:5000',

	// [SECRET] //
	SECRET_KEY: process.env.SECRET_KEY || 'secret',

	// [FUNCTIONALITY] //
	ADMIN_FUNCTIONALITY: process.env.ADMIN_FUNCTIONALITY || false,
	COMMENT_FUNCTIONALITY: process.env.COMMENT_FUNCTIONALITY || false,
	POST_FUNCTIONALITY: process.env.POST_FUNCTIONALITY || false,
	SHOP_FUNCTIONALITY: process.env.SHOP_FUNCTIONALITY || false,
	USER_FUNCTIONALITY: process.env.USER_FUNCTIONALITY || false,

	// [HOME] //
	CUSTOM_HOME: process.env.CUSTOM_HOME || 'false',
	
	// [EMAIL] //
	EMAIL: process.env.EMAIL || '',
	EMAIL_PASSWORD: process.env.EMAIL_PASSWORD || '',
	EMAIL_SERVICE: process.env.EMAIL_SERVICE || '',

	// [EMAIL-RECEIVERS] //
	ADMIN_EMAIL: process.env.ADMIN_EMAIL || '',
	ADVANCED_EMAIL: process.env.ADVANCED_EMAIL || '',
	DESIGNS_EMAIL: process.env.DESIGNS_EMAIL || '',
	INSTALLS_EMAIL: process.env.INSTALLS_EMAIL || '',
	SERVICES_EMAIL: process.env.SERVICES_EMAIL || '',

	// [STRIPE] //
	STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY || '',
	STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY || '',

	// [IEX] //
	IEX_PUBLIC_KEY: process.env.IEX_PUBLIC_KEY || '',
	IEX_SB_PUBLIC_KEY: process.env.IEX_SB_PUBLIC_KEY || '',
}