const express = require('express')
const accountController = require('../controllers/accountController')
const middleware = require('../middleware/auth.middleware')
const router = express.Router();

router.post('/',middleware.authMiddleware, accountController.createAccountController)

router.get('/',middleware.authMiddleware, accountController.getUserAccountsController)

router.get('/balance/:accountId',middleware.authMiddleware, accountController.getAccountBalanceController)

module.exports = router;