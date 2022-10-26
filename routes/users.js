const router = require('express').Router();
const usersRepo = require('../respositories/users')
const express = require("express");

/* GET users listing. */
router.get('/', async function(req, res, next) {
  res.send(await usersRepo.getAllUsers())
});
/*GET user by id */
router.get('/:id', async function(req, res, next){
  let id = req.params.id;
  res.send(await usersRepo.getUser(id))
});
/*POST user*/ 
router.post('/', async function(req, res, next) {
  let user = req.body;
  res.send(await usersRepo.addUser(user))
});
/*PUT user */
router.put('/', async function(req, res, next) {
  res.send(await usersRepo.updateUser())
});
/*DELETE user*/
router.delete('/:id', async function(req, res, next){
  let id = req.params.id;
  res.send(await usersRepo.deleteUser(id))
});

module.exports = router;
