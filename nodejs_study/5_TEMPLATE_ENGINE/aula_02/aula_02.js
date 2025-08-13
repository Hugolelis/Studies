// variaveis no handlebars

const express = require('express')
const exphbs = require('express-handlebars')
const port = 3000

const app = express()
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    const user = {
        name: 'Hugo',
        surname: 'de Lelis',
        age: 19
    }

    res.render('home', { user: user })
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})