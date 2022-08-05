const express = require('express');
const asyncHandler = require('express-async-handler');

const {setTokenCookie, requireAuth} = require('../../utils/auth');
const { Comment } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

const validateComment = [
    check('content')
        .exists({ checkFalsy: true })
        .withMessage('Please provide some content.')
]

router.get('/', asyncHandler(async(req, res) => {
    const comments = await Comment.findAll();
    return res.json(comments);
}));

router.post(
    '/',
    requireAuth,
    validateComment,
    asyncHandler(async (req, res) => {
        const { article_id, content } = req.body;
        const newComment = await Comment.create({
            article_id,
            content,
            user_id: req.user.id
        });
        return res.json(newComment)
    })
)

router.put(
    `/:id(\\d+)`,
    requireAuth,
    validateComment,
    asyncHandler(async (req, res) => {
        const commentId = req.params.id;
        const { article_id, content } = req.body;
        const comment = await Comment.findByPk(commentId);

        comment.article_id = article_id;
        comment.content = content;

        await comment.save();
        return res.json(comment);
    })
)

router.delete(
    `/:id(\\d+)`,
    requireAuth,
    asyncHandler(async (req, res) => {
        const commentId = req.params.id;
        const comment = await Comment.findByPk(commentId);

        if (comment) {
            await comment.destroy();
            res.send({ message: "deleted!" });
        }
    })
)

module.exports = router;
