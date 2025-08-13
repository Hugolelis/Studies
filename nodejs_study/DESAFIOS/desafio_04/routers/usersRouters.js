const express = require('express')
const router = express.Router()

const path = require('path')
const basePath = path.join(__dirname, '../pages')

router.get('/', (req, res) => {
    res.sendFile(`${basePath}/user.html`)
})

router.get('/register', (req, res) => {
    res.sendFile(`${basePath}/userRegister.html`)
})

router.post('/save', (req, res) => {
    console.log(req.body)
    res.sendFile(`${basePath}/userRegister.html`)
})

module.exports = router