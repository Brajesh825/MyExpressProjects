const express = require('express')
const router = express.Router();

const { createUser,
        getUser,
        updateUser,
        deleteUser} = require('../controllers/users')

router.route('/').post(createUser)
router.route('/:id').get(getUser)
router.route('/:id').patch(updateUser)
router.route('/:id').delete(deleteUser)

module.exports = router