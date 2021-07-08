const express = require('express')
const router = express.Router()

// Dummy router
router.get('/router', (req,res) => {
    console.log('1111')
    res.end()
})

module.exports = router