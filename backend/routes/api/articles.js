const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Article } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

const validateArticle = [
    check('title')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a valid title.'),
    check('content')
        .exists({ checkFalsy: true })
        .withMessage('Please provide the content of your article'),
    check('img_url')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a image for your article'),
    handleValidationErrors
]

router.get('/', asyncHandler(async (req, res) => {
    const articles = await Article.findAll({
        include: 'User'
    });
    return res.json(articles);
}));

router.post(
    '/',
    requireAuth,
    validateArticle,
    asyncHandler(async (req, res) => {
        const { title, content, img_url } = req.body;
        const newArticle = await Article.create({
            title,
            content,
            user_id: req.user.id,
            img_url
        });
        return res.json(newArticle);
    })
);

router.put(
    `/:id(\\d+)`,
    requireAuth,
    validateArticle,
    asyncHandler(async (req, res) => {
        const articleId = req.params.id;
        const { title, content, img_url } = req.body;
        const article = await Article.findByPk(articleId);

        article.title = title;
        article.content = content;
        article.img_url = img_url;

        await article.save();
        return res.json(article);
    })
);

router.delete(
    `/:id(\\d+)`,
    requireAuth,
    asyncHandler(async (req, res) => {
        const articleId = req.params.id;
        const article = await Article.findByPk(articleId);

        if (article) {
            await article.destroy();
            res.send({ message: "deleted!" });
        }
    })
);

module.exports = router;
