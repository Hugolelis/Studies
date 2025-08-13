// módulo rotas

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

// methods

app.use('/users', usersRouter)


app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
