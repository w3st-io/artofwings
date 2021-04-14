// [REQUIRE] //
const cors = require('cors')
const express = require('express')
const validator = require('validator')
const mongoose = require('mongoose')


// [REQUIRE] Personal //
const rateLimiter = require('../../s-rate-limiters')
const Auth = require('../../s-middleware/Auth')


// [EXPRESS + USE] //
const router = express.Router().use(cors())


/******************* [CRUD] *******************/
// [CREATE] Auth Required //
router.post(
	'/create',
	Auth.userToken(),
	rateLimiter.commentLimiter,
	async (req, res) => {
		try {
			
		}
		catch (err) {
			res.status(200).send({
				executed: false,
				status: false,
				message: `/api/comments/create: Error --> ${err}`,
			})
		}
	}
)


// [UPDATE] Auth Required //
router.post(
	'/update',
	Auth.userToken(),
	async (req, res) => {},
)


// [DELETE] Auth Required //
router.delete(
	'/delete/:comment_id',
	Auth.userToken(),
	async (req, res) => {
		try {
			res.sendStatus(200)
			/*
			// [VALIDATE] General //
			if (mongoose.isValidObjectId(req.params.comment_id)) {
				// [DELETE] //
				const comment = await commentsCollection.c_deleteByIdAndUser({
					comment_id: req.params.comment_id,
					user_id: req.decoded.user_id,
				})
					
				if (comment.status) {
					// [DELETE] CommentLike //
					const commentLikes = await commentLikesCollection.c_deleteByComment(
						req.params.comment_id
					)

					// [DELETE] Notifications //
					const notifications = await notificationsCollection.c_deleteByComment(
						req.params.comment_id
					)
					
					// [DELETE] Activity //
					const activity = await activitiesCollection.c_deleteCommentActivity(
						req.params.comment_id
					)

					res.status(200).send({
						executed: true,
						status: true,
						deleted: [comment, commentLikes, notifications, activity],
					})
				}
				else { res.status(200).send(comment) }
			}
			else {
				res.status(200).send({
					executed: true,
					status: false,
					message: '/api/comments/delete: Invalid comment_id'
				})
			}
			*/
		}
		catch (err) {
			res.status(200).send({
				executed: false,
				status: false,
				message: `/api/comments/delete: Error --> ${err}`,
			})
		}
	},
)


module.exports = router