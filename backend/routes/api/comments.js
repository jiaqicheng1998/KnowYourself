const express = require('express');
const asyncHandler = require('express-async-handler');

const {setTokenCookie, requireAuth} = require('../../utils/auth');
const { Comment } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async(req, res) => {
    const comments = await Comment.findAll();
    return res.json(comments);
}));

module.exports = router;
