const express = require('express');
const router = express.Router();
const userController = require('../Controller/UserController');

// Create a new user
router.post('/createusers', userController.createUser);

// Get all users
router.get('/getusers', userController.getAllUsers);

// Get a specific user by ID
router.get('/getuser/:id', userController.getUserById);

// Update a user by ID
router.put('/updateuser/:id', userController.updateUser);

// Delete a user by ID
router.delete('/deleteuser/:id', userController.deleteUser);

router.post('/login', userController.login);

module.exports = router;