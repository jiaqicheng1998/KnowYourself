const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const articlesRouter = require('./articles.js');
const commentsRouter = require('./comments.js');
const resultsRouter = require('./results.js')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/articles', articlesRouter);

router.use('/comments', commentsRouter);

router.use('/results', resultsRouter);

router.post('/test', function(req, res) {
    res.json({ requestBody: req.body })
});

module.exports = router;