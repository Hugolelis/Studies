// conection pool
import express from 'express'
import exphbs from 'express-handlebars'
import { pool } from './db/conn.js'

const app = express()
const port = 3000

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
app.use(express.static('public'))

app.listen(port, () => {
    console.log('Conectou ao mysql')
    console.log(`Servidor rodando na porta ${port}`)
})  

app.post('/books/insertbook', (req, res) => {
    const title = req.body.title
    const pages = req.body.pages

    const sql = `INSERT INTO books (title, pages) VALUES ('${title}', '${pages}')`

    pool.query(sql, (e) => {
        if(e) {
            return console.log(e)
        }

        res.redirect('/books')
    })
})

app.get('/books', (req, res) => {
    const sql = "SELECT * FROM books"
    
    pool.query(sql, (e, data) => {
        if(e) {
            return console.log(e)
        }

        const books = data
        
        res.render('books', { books })
    })
})

app.get('/books/:id', (req, res) => {
    const id = req.params.id
    const sql = `SELECT * FROM books WHERE id = ${id}`

    pool.query(sql, (e, data) => {
        if(e) console.log(e)

        const book = data[0]

        res.render('book', { book })
    })
})

app.get('/books/edit/:id', (req, res) => {
    const id = req.params.id
    const sql = `SELECT * FROM books WHERE id = ${id}`

    pool.query(sql, (e, data) => {
        if(e) console.log(e)
        
        const book = data[0]

        res.render('editBook', { book })
    })
})

app.post('/books/updatebook', (req, res) => {
    const id = req.body.id
    const title = req.body.title
    const pages = req.body.pages

    const sql = `UPDATE books SET title = '${title}', pages = '${pages}' WHERE id = '${id}'`

    pool.query(sql, (e) => {
        if(e) console.log(e)

        res.redirect('/books')
    })
})

app.get('/books/delete/:id', (req, res) => {
    const id = req.params.id

    const sql = `DELETE FROM books WHERE id = '${id}'`

    pool.query(sql, (e) => {
        console.log(e)

        res.redirect('/books')
    })
})

app.get('/', (req, res) => {
    res.render('home')
})