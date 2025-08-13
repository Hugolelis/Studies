// requires
const express = require('express')
const app = express()

const path = require('path')
const basePath = path.join(__dirname, 'pages')

const port = 5000
const userRouter = require('./routers/usersRouters')

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.use(express.static('public'))
app.use('/user', userRouter)

// methods 
app.get('/about', (req, res) => {
    res.sendFile(`${basePath}/about.html`)
})

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.use((req, res, next) => {
    res.status(404).sendFile(`${basePath}/404.html`)
})

// listen
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})