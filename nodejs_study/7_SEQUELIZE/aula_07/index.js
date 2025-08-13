// relacionamento entre models
import express from 'express'
import exphbs from 'express-handlebars'
import { sequelize as conn } from './db/conn.js'

import { User } from './models/User.js'
import { Address } from './models/Address.js'

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

app.get('/users/:id', async (req, res) => {
    const id = req.params.id

    const user = await User.findOne({raw: true, where: { id: id }})

    res.render('userview', { user })
})

app.post('/users/delete/:id', async (req, res) => {
    const id = req.params.id
    await User.destroy({raw: true, where: {id: id}})

    res.redirect('/')
})

app.get('/users/edit/:id', async (req, res) => {
    const id = req.params.id
    const user = await User.findOne({include: Address, where: { id: id }})

    res.render('useredit', { user: user.get({ plain: true })})
})

app.post('/users/update', async (req, res) => {
    const id = req.body.id
    const name = req.body.name
    const occupation = req.body.occupation
    let newsSletter = req.body.newsSletter

    newsSletter === 'on' ? newsSletter = true : newsSletter = false

    const userData = {
        name, 
        occupation,
        newsSletter
    }

    User.update(userData, {where: { id: id}})

    res.redirect('/')
})

app.post('/address/create', async (req, res) => {
    const UserId = req.body.UserId
    const street = req.body.street
    const number = req.body.number
    const city = req.body.city

    const address = {
        UserId,
        street,
        number,
        city
    }

    await Address.create(address)

    res.redirect(`/users/edit/${UserId}`)
})

app.post('/address/delete', async (req, res) => {
    const UserId = req.body.UserId
    const id = req.body.id

    await Address.destroy({where: { id: id }})

    res.redirect(`/users/edit/${UserId}`)
})

app.get('/', async (req, res) => {

    const users = await User.findAll({raw: true})

    res.render('home', { users })
})


conn.sync().then(() => {
    app.listen(port, () => console.log(`Servidor rodando na porta ${port}!`))
}).catch(e => {
    console.log(e)
})
