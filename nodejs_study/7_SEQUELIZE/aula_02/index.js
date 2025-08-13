// inserindo dado com sequelize
import express from 'express'
import exphbs from 'express-handlebars'
import { sequelize as conn } from './db/conn.js'

import { User } from './models/User.js'

const app = express()
const port = 3000

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())
app.use(express.static('public'))

app.get('/users/create', (req, res) => {
    res.render('adduser')
})

app.post('/users/create', async (req, res) => {
    const name = req.body.name
    const occupation = req.body.occupation
    let newsSletter = req.body.newsSletter

    newsSletter === 'on' ? newsSletter = true : newsSletter = false

    await User.create({name, occupation, newsSletter})

    res.redirect('/')
})

app.get('/', (req, res) => {
    res.render('home')
})

conn.sync().then(() => {
    app.listen(port, () => console.log(`Servidor rodando na porta ${port}!`))
}).catch(e => {
    console.log(e)
})
