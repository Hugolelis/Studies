// estruturas no handlebars

const express = require('express')
const exphbs = require('express-handlebars')
const port = 3000

const app = express()
app.use(express.static('public'))

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {
    const items = [
        "Item A","Item B", "Item C"
    ]

    res.render('dashboard', { items })
})

app.get('/post', (req, res) => {
    const post = {
        title: 'NodeJs',
        category: 'Javascript',
        body: 'Aprenda node e Javascript',
        comments: 4
    }

    res.render('blogpost', { post })
})

app.get('/blog', (req, res) => {
    const posts = [
        {
            title: "Aprender node",
            category: "Javascript",
            body: "Só sucesso aqui nesse node",
            comments: 4
        },
        {
            title: "Aprender PHP",
            category: "PHP",
            body: "Só sucesso aqui nesse PHP",
            comments: 3
        },
        {
            title: "Aprender SQL",
            category: "SQL",
            body: "Só sucesso aqui nesse SQL",
            comments: 5
        },
    ]

    res.render('blog', { posts })
})

app.get('/', (req, res) => {
    const user = {
        name: 'Hugo',
        surname: 'de Lelis',
        age: 19
    }

    const auth = true

    res.render('home', { user, auth })
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})