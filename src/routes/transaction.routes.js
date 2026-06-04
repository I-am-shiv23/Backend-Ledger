const express = require('express')
const { authMiddleware, authSystemUserMiddleware} = require('../middleware/auth.middleware')
const transactionController = require('../controllers/transactionController')

const router = express.Router();

router.post('/', authMiddleware, transactionController.createTransaction )
router.post("/system/initial-funds", authSystemUserMiddleware, transactionController.createInitialsFundsTransaction)

module.exports = router
