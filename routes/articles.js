const router = require('express').Router();
const articlesRepo = require('../respositories/articles')
const express = require("express");

/* GET articles listing. */
router.get('/', async function (req, res, next) {
    res.send(await articlesRepo.getAllArticles())
});
/*GET article by id */
router.get('/:id', async function (req, res, next) {
    let id = req.params.id;
    res.send(await articlesRepo.getArticle(id))
});
/*GET articles by User id */
router.get('/:id/articles', async function (req, res, next) {
    let UserId = req.params.UserId;
    res.send(await articlesRepo.getArticleByUserId(UserId))
});
/*POST article*/
router.post('/', async function (req, res, next) {
    let article = req.body;
    res.send(await articlesRepo.addArticle(article))
});
/*PUT article */
router.put('/', async function (req, res, next) {
    res.send(await articlesRepo.updateArticle())
});
/*DELETE article*/
router.delete('/:id', async function (req, res, next) {
    let id = req.params.id;
    res.send(await articlesRepo.deleteArticle(id))
});

module.exports = router;