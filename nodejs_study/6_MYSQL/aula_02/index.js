// inserindo dados
import express from 'express'
import exphbs from 'express-handlebars'
import mysql from 'mysql'

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

app.post('/books/insertbook', (req, res) => {
    const title = req.body.title
    const pages = req.body.pages

    const sql = `INSERT INTO books (title, pages) VALUES ('${title}', '${pages}')`

    conn.query(sql, (e) => {
        if(e) {
            return console.log(e)
        }

        res.redirect('/')
    })

})

app.get('/', (req, res) => {
    res.render('home')
})

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql'
})

conn.connect((e) => {
    if(e) {
        return console.log(e)
    }

    app.listen(port, () => {
        console.log('Conectou ao mysql')
        console.log(`Servidor rodando na porta ${port}`)
    })    
})