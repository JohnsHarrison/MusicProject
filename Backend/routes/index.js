const controllers = require('../controllers')
const express = require('express')
const router = express.Router()


router.get('/', (req,res) => res.send('This is the root'))

// Users
router.get('/users', controllers.getUsers)
router.post('/users', controllers.createUser)
router.delete("/users/:id", controllers.deleteUser)

module.exports = router 