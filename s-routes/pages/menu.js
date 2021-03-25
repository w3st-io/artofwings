// [REQUIRE] //
const cors = require('cors')
const express = require('express')


// [REQUIRE] Personal //
const Auth = require('../../s-middleware/Auth')
const menu = require('../../s-defaults/artofwings/menu')


// [EXPRESS + USE] //
const router = express.Router().use(cors())


router.get(
	'/',
	Auth.userTokenNotRequired(),
	async (req, res) => {
		try {
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