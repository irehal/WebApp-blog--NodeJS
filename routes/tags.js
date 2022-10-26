const router = require('express').Router();
const tagsRepo = require('../respositories/tags')
const express = require("express");

/* GET tags listing. */
router.get('/', async function (req, res, next) {
    res.send(await tagsRepo.getAllTags())
});
/*GET tag by id */
router.get('/:id', async function (req, res, next) {
    let id = req.params.id;
    res.send(await tagsRepo.getTag(id))
});
/*POST tag*/
router.post('/', async function (req, res, next) {
    let tag = req.body;
    res.send(await tagsRepo.addTag(tag))
});
/*PUT tag */
router.put('/', async function (req, res, next) {
    res.send(await tagsRepo.updateTag())
});
/*DELETE tag*/
router.delete('/:id', async function (req, res, next) {
    let id = req.params.id;
    res.send(await tagsRepo.deleteTag(id))
});

module.exports = router;