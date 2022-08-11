const express = require('express');
const asyncHandler = require('express-async-handler');

const {setTokenCookie, requireAuth} = require('../../utils/auth');
const { Image } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async(req, res) => {
    const images = await Image.findAll();
    return res.json(images);
}));

router.post(
    '/', 
    requireAuth,
    asyncHandler(async (req, res) => {
        const { img_url, article_id } = req.body;
        const newImage = await Image.create({
            img_url,
            article_id
        });
        return res.json(newImage);
    })
)

module.exports = router;