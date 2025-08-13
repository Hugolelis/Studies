// conn com sequelize
import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize('nodesequelize', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
})

try {
    sequelize.authenticate()
    console.log('Conectamos com sucesso')
} catch(e) {
    console.log('Não foi possivel conectar')
    console.log(e)
}