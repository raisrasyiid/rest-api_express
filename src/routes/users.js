const express = require('express');
const router = express.Router();

const userController = require('../controller/users');

// READ - GET
router.get("/", userController.getAllUsers)

// CREATE - POST
router.post("/", userController.createUser);

//UPDATE - PATCH
router.patch('/:id', userController.updateUser);

//DELETE - DELETE
router.delete('/:id', userController.deleteUser);

module.exports = router;