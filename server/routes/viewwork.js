const express = require('express')
const router = express.Router()

module.exports = () =>{
router.get('/', (req, res) =>{
    return res.render('landscapes')
})

router.get('/:type', (req, res) =>{
    return res.render('street')
})
return router;
}