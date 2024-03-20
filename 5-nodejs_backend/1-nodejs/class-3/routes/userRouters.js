const express = require("express");

const router = express.Router();

const { getUsers,getUserById, createUser, updateUser,deleteUser } = require("../controllers/userControllers");

// Define routes

router.get('/', getUsers);
router.get('/:userId', getUserById);
router.post('/', createUser);
router.patch('/:userId', updateUser);
router.delete('/:userId', deleteUser);




module.exports = router;