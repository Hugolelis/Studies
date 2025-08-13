import express from 'express'
const app = express()

const port = 3000

app.use(express.urlencoded({extended: true}))
app.use(express.json())

// endpoints
app.post('/createProduct', (req, res) => {
    const { name, price } = req.body

    if(!name) return res.status(422).json({message: 'O campo nome é obrigatório!'})

    console.log(`${name}: ${price}`)
    res.status(201).json({message: 'O produto foi cadastrado!'})
})

app.get('/', (req, res) => {
    res.status(200).json({message: 'Primeira rota criada'})
})

app.listen(port, () => {
    console.log(`Server listen in port ${port}`)
})