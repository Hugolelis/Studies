import express from 'express'
import exphs from 'express-handlebars'

const app = express()
const port = 3000

app.engine('handlebars', exphs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

const products = [
    {
        id: 1,
        title: 'Computador gamer',
        category: 'CPU',
        body: 'Um computador muito bom da cor branca'
    },
    {
        id: 2,
        title: 'Teclado gamer',
        category: 'Periférico',
        body: 'Um teclado muito bom da cor branca'
    },
    {
        id: 3,
        title: 'Mouse gamer',
        category: 'Periférico',
        body: 'Um mouse muito bom da cor branca'
    },
]

app.get('/product/:id', (req, res) => {
    const id = req.params.id
    const product = products.find(item => item.id === parseInt(id))

    res.render('products', { product })
})

app.get('/', (req, res) => {
    res.render('home', { products })
})

app.use((req, res) => {
    res.status(404).render('404', { layout: false })
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}!`)
})
