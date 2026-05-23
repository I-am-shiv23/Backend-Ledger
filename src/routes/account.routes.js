const express = require('express')
const accountController = require('../controllers/accountController')
const middleware = require('../middleware/auth.middleware')
router = express.Router();

router.post('/',middleware.authMiddleware, accountController.createAccountController)

module.exports = router;