// colocando css e página 404

const express = require('express')
const app = express()

const port = 3000

const path = require('path')
const basePath = path.join(__dirname, 'templates')

const usersRouter = require('./users/router.js')

// ler o body
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

// arquivos estáticos
app.use(express.static('public'))

// methods

app.use('/users', usersRouter)


app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

// 404
app.use((req, res, next) => {
    res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
