// linkando com o mysql
import express from 'express'
import exphbs from 'express-handlebars'
import mysql from 'mysql'

const app = express()
const port = 3000

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql'
})

conn.connect((err) => {
    if(err) {
        return console.log(err)
    }

    app.listen(port, () => {
        console.log('Conectou ao mysql')
        console.log(`Servidor rodando na porta ${port}`)
    })    
})