const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Result } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

const validateResult = [
    check('title')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a valid title'),
    check('result')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a valid result'),
    handleValidationErrors
]

router.get('/', asyncHandler(async (req, res) => {
    const results = await Result.findAll({
        include: 'User'
    });
    return res.json(results)
}))

router.post(
    '/',
    requireAuth,
    validateResult,
    asyncHandler(async (req, res) => {
        const { title, result } = req.body;
        const newResult = await Result.create({
            title,
            result,
            user_id: req.user.id
        });
        return res.json(newResult)
    })
)

module.exports = router;