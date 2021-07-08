const express = require('express')
const router = express.Router()

// route-1
router.get('/students/',(req,res) =>{
    console.log("Fetching all students :[" + req + "]")
    res.send('you send [' + req.eventNames + ']\n')
})

// route-2
router.get('/', (req, res) => {
    res.send('Hello World!')
})
  
module.exports = router