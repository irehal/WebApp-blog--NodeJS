const router = require('express').Router();
const commentsRepo = require('../respositories/comments')
const express = require("express");

/* GET comments listing. */
router.get('/', async function (req, res, next) {
    res.send(await commentsRepo.getAllComments())
});
/*GET comment by id */
router.get('/:id', async function (req, res, next) {
    let id = req.params.id;
    res.send(await commentsRepo.getComment(id))
});
/*GET comments by User id */
router.get('/users/:id/comments', async function (req, res, next) {
    let UserId = req.params.UserId;
    res.send(await commentsRepo.getCommentByUserId(UserId))
});
/*GET comments by Article id */
router.get('/articles/:id/comments', async function (req, res, next) {
    let ArticleId = req.params.ArticleId;
    res.send(await commentsRepo.getCommentByArticleId(ArticleId))
});
/*POST comment*/
router.post('/', async function (req, res, next) {
    let comment = req.body;
    res.send(await commentsRepo.addComment(comment))
});
/*PUT comment */
router.put('/', async function (req, res, next) {
    res.send(await commentsRepo.updateComment())
});
/*DELETE comment*/
router.delete('/:id', async function (req, res, next) {
    let id = req.params.id;
    res.send(await commentsRepo.deleteComment(id))
});

module.exports = router;