// ler um nome e uma idade e tratar o erro com catch

const inquirer = require('inquirer')

inquirer.prompt([
    {
        name: 'nome', message: 'Seu nome é? '
    },
    {
        name: 'idade', idade: 'Sua idade é? '
    }
])
.then(resp => {
    if(!resp.nome || !resp.idade) {
        throw new Error('Campos vazios!')
    } 

    console.log(`Olá ${resp.nome} com idade ${resp.idade}`)
})
.catch(e => {
    console.log(e)
} ) 
