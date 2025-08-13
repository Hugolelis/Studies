import express from 'express'
import exphbs from 'express-handlebars'

const app = express()
const port = 3000

import { client as conn } from './db/conn.js'

import { router as productsRoutes } from './routes/productsRoutes.js'
import { productController } from './controllers/productController.js'

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/products', productsRoutes)
app.get('/', productController.showProducts)

app.listen(port, () => {
    console.log(`Server listing port ${port}`)
})