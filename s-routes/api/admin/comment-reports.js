// [REQUIRE] //
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const validator = require('validator')


// [REQUIRE] Personal //
const commentReportsCollection = require('../../../s-collections/commentReportsCollection')
const Auth = require('../../../s-middleware/Auth')


// [EXPRESS + USE] //
const router = express.Router().use(cors())


/******************* [MARK-HANDLED-STATUS] *******************/
router.get(
	'/mark-handled/:commentReport_id',
	Auth.adminToken(),
	async (req, res) => {
		try {
			// [VALIDATE] General //
			if (validator.isAscii(req.params.commentReport_id)) {
				const returned = await commentReportsCollection.c_markHandled(
					req.params.commentReport_id
				)

				res.send(returned)
			}
			else {
				res.send({
					executed: true,
					status: false,
					message: 'Invalid commentReport_id'
				})
			}
		}
		catch (err) {
			res.send({
				executed: false,
				status: false,
				message: `/api/admin/comment-reports/mark-handled: --> ${err}`,
			})
		}
	}
)


module.exports = router